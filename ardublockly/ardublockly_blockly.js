/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

/**
 * Blockly main workspace.
 * @type Blockly.WorkspaceSvg
 */
Ardublockly.workspace = null;

/**
 * Blockly workspace toolbox XML.
 * @type Element
 */
Ardublockly.xmlTree = null;

/**
 * Injects Blockly into a given HTML element. Toolbox XMl has to be a string.
 * @param {!Element} blocklyEl Element to inject Blockly into.
 * @param {!string} toolboxXml String containing the toolbox XML content.
 * @param {!string} blocklyPath String containing the Blockly directory path.
 */
Ardublockly.injectBlockly = function (blocklyEl, toolboxXml, blocklyPath) {
    // Remove any trailing slashes in the blockly path
    if (blocklyPath.substr(-1) === '/') {
        blocklyPath = blocklyPath.slice(0, -1);
    }
    Ardublockly.xmlTree = Blockly.Xml.textToDom(toolboxXml);
    // The Toolbox menu language is edited directly from the XML nodes.
    Ardublockly.updateToolboxLanguage();
    Ardublockly.workspace = Blockly.inject(blocklyEl, {
        collapse: true,
        comments: true,
        css: true,
        disable: true,
        grid: false,
        maxBlocks: Infinity,
        media: blocklyPath + '/media/',
        rtl: false,
        scrollbars: true,
        sounds: true,
        toolbox: Ardublockly.xmlTree,
        trashcan: true,
        zoom: {
            controls: true,
            wheel: false,
            startScale: 1.0,
            maxScale: 2,
            minScale: 0.2,
            scaleSpeed: 1.2
        }
    });
    // On language change the blocks have been stored in session storage
    Ardublockly.loadSessionStorageBlocks();
};

/** Binds the event listeners relevant to Blockly. */
Ardublockly.bindBlocklyEventListeners = function () {
    Ardublockly.workspace.addChangeListener(function (event) {
        if (event.type !== Blockly.Events.UI) {
            Ardublockly.renderContent();
        }
    });
    // Ensure the Blockly workspace resize accordingly
    window.addEventListener('resize',
        function () {
            Blockly.svgResize(Ardublockly.workspace);
        }, false);
};

/** @return {!string} Generated Arduino code from the Blockly workspace. */
Ardublockly.generateArduino = function () {
    return Blockly.Arduino.workspaceToCode(Ardublockly.workspace);
};

/** @return {!string} Generated XML code from the Blockly workspace. */
Ardublockly.generateXml = function () {
    var xmlDom = Blockly.Xml.workspaceToDom(Ardublockly.workspace);
    return Blockly.Xml.domToPrettyText(xmlDom);
};

/**
 * Loads an XML file from the server and replaces the current blocks into the
 * Blockly workspace.
 * @param {!string} xmlFile XML file path in a reachable server (no local path).
 * @param {!function} cbSuccess Function to be called once the file is loaded.
 * @param {!function} cbError Function to be called if there is a connection
 *     error to the XML server.
 */
Ardublockly.loadXmlBlockFile = function (xmlFile, cbSuccess, cbError) {
    var request = Ardublockly.ajaxRequest();
    var requestCb = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var success = Ardublockly.replaceBlocksfromXml(request.responseText);
                cbSuccess(success);
            } else {
                cbError();
            }
        }
    };
    try {
        request.open('GET', xmlFile, true);
        request.onreadystatechange = requestCb;
        request.send(null);
    } catch (e) {
        cbError();
    }
};

/**
 * Parses the XML from its argument input to generate and replace the blocks
 * in the Blockly workspace.
 * @param {!string} blocksXml String of XML code for the blocks.
 * @return {!boolean} Indicates if the XML into blocks parse was successful.
 */
Ardublockly.replaceBlocksfromXml = function (blocksXml) {
    var xmlDom = null;
    try {
        xmlDom = Blockly.Xml.textToDom(blocksXml);
    } catch (e) {
        return false;
    }
    Ardublockly.workspace.clear();
    var success = false;
    if (xmlDom) {
        success = Ardublockly.loadBlocksfromXmlDom(xmlDom);
    }
    return success;
};

/**
 * Parses the XML from its argument to add the blocks to the workspace.
 * @param {!string} blocksXmlDom String of XML DOM code for the blocks.
 * @return {!boolean} Indicates if the XML into blocks parse was successful.
 */
Ardublockly.loadBlocksfromXmlDom = function (blocksXmlDom) {
    try {
        Blockly.Xml.domToWorkspace(blocksXmlDom, Ardublockly.workspace);
    } catch (e) {
        return false;
    }
    return true;
};

/**
 * Save blocks into session storage. Note that MSIE 11 does not support
 * sessionStorage on file:// URLs.
 */
Ardublockly.saveSessionStorageBlocks = function () {
    if (window.sessionStorage) {
        var xml = Blockly.Xml.workspaceToDom(Ardublockly.workspace);
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }
};

/** Load blocks saved on session storage and deletes them from storage. */
Ardublockly.loadSessionStorageBlocks = function () {
    var loadOnce;
    try {
        loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
        loadOnce = null;
    }
    if (loadOnce) {
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, Ardublockly.workspace);
    }
};

/** Discard all blocks from the workspace. */
Ardublockly.discardAllBlocks = function () {
    var blockCount = Ardublockly.workspace.getAllBlocks().length;
    if (blockCount === 1) {
        // 載入預設積木
        // 立刻 loadServerXmlFile 的話, 有時候會直接顯示英文語系
        setTimeout(function () {
            Ardublockly.replaceBlocksfromXml(defaultProjectXML);
            Ardublockly.renderContent();
        }, 500)
    } else if (blockCount > 1) {
        Ardublockly.alertMessage(
            Ardublockly.getLocalStr('discardBlocksTitle'),
            Ardublockly.getLocalStr('discardBlocksBody')
                .replace('%1', blockCount),
            true,
            function () {
                // 載入預設積木
                // 立刻 loadServerXmlFile 的話, 有時候會直接顯示英文語系
                setTimeout(function () {
                    Ardublockly.replaceBlocksfromXml(defaultProjectXML);
                    Ardublockly.renderContent();
                }, 500)
            });
    }
};

/** @return {!boolean} Indicates if the Blockly workspace has blocks. */
Ardublockly.isWorkspaceEmpty = function () {
    return !Ardublockly.workspace.getAllBlocks().length;
};

/**
 * Changes the Arduino board profile if different from the currently set one.
 * @param {string} newBoard Name of the new profile to set.
 */
Ardublockly.changeBlocklyArduinoBoard = function (newBoard) {
    if (Blockly.Arduino.Boards.selected !== Blockly.Arduino.Boards[newBoard]) {
        Blockly.Arduino.Boards.changeBoard(Ardublockly.workspace, newBoard);
    }
};

/** Update the toolbox categories language. */
Ardublockly.updateToolboxLanguage = function () {
    var categories = ['catLogic', 'catLoops', 'catMath', 'catText',
        'catVariables', 'catFunctions', 'catInputOutput',
        'catTime', 'catAudio', 'catMotors', 'catComms'];
    var categoryNodes = Ardublockly.xmlTree.getElementsByTagName('category');
    for (var i = 0, cat; cat = categoryNodes[i]; i++) {
        var catId = cat.getAttribute('id');
        var catText = Ardublockly.getLocalStr(catId);
        if (catText) {
            cat.setAttribute('name', catText);
        }
    }
};

/**
 * Adds a category to the current toolbox.
 * @param {!string} categoryTitle Toolbox category title.
 * @param {!Element} categoryDom Toolbox category to add add the end of tree.
 */
Ardublockly.addToolboxCategory = function (categoryTitle, categoryDom) {
    categoryDom.id = 'cat' + categoryTitle.replace(/\s+/g, '');
    var catText = Ardublockly.getLocalStr(categoryDom.id) ||
        Ardublockly.getLocalStr('BLOCKS_CATEGORY_' + categoryTitle.toUpperCase());
    if (!catText) {
        catText = categoryTitle;
    }
    categoryDom.setAttribute('name', catText);
    Ardublockly.xmlTree.appendChild(document.createElement('sep'));
    Ardublockly.xmlTree.appendChild(categoryDom);
    Ardublockly.workspace.updateToolbox(Ardublockly.xmlTree);
};

/**
 * Adds a category to the current toolbox.
 * @param {!string} categoryTitle Toolbox category title.
 * @param {!Element} categoryDom Toolbox category to add the end of tree.
 */
Ardublockly.appendToolboxFunction = function (categoryTitle, categoryDom) {
    var categoryId = 'cat' + categoryTitle.replace(/\s+/g, '');
    var categoryNodes = Ardublockly.xmlTree.getElementsByTagName('category');
    for (var i = 0; i < categoryNodes.length; i++) {
        if (categoryNodes[i].getAttribute('id') === categoryId) {
            var previousNode = categoryNodes[i].previousElementSibling;
            Ardublockly.xmlTree.removeChild(categoryNodes[i]);
            if (previousNode && previousNode.nodeName === 'sep') {
                Ardublockly.xmlTree.removeChild(previousNode);
            }
        }
    }
    categoryDom.id = 'cat' + categoryTitle.replace(/\s+/g, '');
    categoryDom.setAttribute('name', categoryTitle);
    Ardublockly.xmlTree.appendChild(document.createElement('sep'));
    Ardublockly.xmlTree.appendChild(categoryDom);
    Ardublockly.workspace.updateToolbox(Ardublockly.xmlTree);
};

/**
 * Adds a block to the current category.
 * @param {!string} categoryTitle Toolbox category title.
 * @param {!Element} blockDom block to add the end of category.
 */
Ardublockly.appendCategoryBlock = function (categoryTitle, catDom) {
    var categoryId = 'cat' + categoryTitle.replace(/\s+/g, '');
    var categoryNodes = Ardublockly.xmlTree.getElementsByTagName('category');
    var categoryDom = '';
    for (var i = 0; i < categoryNodes.length; i++) {
        if (categoryNodes[i].getAttribute('id') === categoryId) {
            categoryDom = categoryNodes[i];
            var blockNodes = catDom.getElementsByTagName('block');
            for (var j = 0; j < blockNodes.length; j++) {
                categoryDom.appendChild(blockNodes[j]);
            }

            var previousNode = categoryNodes[i].previousElementSibling;
            Ardublockly.xmlTree.removeChild(categoryNodes[i]);
            if (previousNode && previousNode.nodeName === 'sep') {
                Ardublockly.xmlTree.removeChild(previousNode);
            }
        }
    }
    Ardublockly.xmlTree.appendChild(document.createElement('sep'));
    Ardublockly.xmlTree.appendChild(categoryDom);
    Ardublockly.workspace.updateToolbox(Ardublockly.xmlTree);
};

/**
 * Removes a category to the current toolbox.
 * @param {!String} categoryTitle Toolbox category name to remove from tree.
 */
Ardublockly.removeToolboxCategory = function (categoryTitle) {
    var categoryId = 'cat' + categoryTitle.replace(/\s+/g, '');
    var categoryNodes = Ardublockly.xmlTree.getElementsByTagName('category');
    for (var i = 0; i < categoryNodes.length; i++) {
        if (categoryNodes[i].getAttribute('id') === categoryId) {
            var previousNode = categoryNodes[i].previousElementSibling;
            Ardublockly.xmlTree.removeChild(categoryNodes[i]);
            if (previousNode && previousNode.nodeName === 'sep') {
                Ardublockly.xmlTree.removeChild(previousNode);
            }
        }
    }
    Ardublockly.workspace.updateToolbox(Ardublockly.xmlTree);
};

/**
 * check a category in toolbox or not.
 * @param {!String} categoryTitle Toolbox category name to remove from tree.
 */
Ardublockly.checkCategoryExists = function (categoryTitle) {
    var exists = false;
    var categoryId = 'cat' + categoryTitle.replace(/\s+/g, '');
    var categoryIdNoCat = categoryTitle.replace(/\s+/g, '');
    var categoryNodes = Ardublockly.xmlTree.getElementsByTagName('category');
    for (var i = 0; i < categoryNodes.length; i++) {
        if (categoryNodes[i].getAttribute('id') === categoryId) {
            exists = true;
            break;
        }
        if (categoryNodes[i].getAttribute('id') === categoryIdNoCat) {
            exists = true;
            break;
        }
    }
    return exists;
};

/** Closes the toolbox block container sub-menu. */
Ardublockly.blocklyCloseToolbox = function () {
    Ardublockly.workspace.toolbox_.flyout_.hide();
};

/** @return {number} The width of the blockly workspace toolbox. */
Ardublockly.blocklyToolboxWidth = function () {
    return Ardublockly.workspace.toolbox_.width;
};

/** @return {!boolean} Indicates if a block is currently being dragged. */
Ardublockly.blocklyIsDragging = function () {
    return (Blockly.dragMode_ !== 0);
};

/** Wraps the blockly 'cut' functionality. */
Ardublockly.blocklyCut = function () {
    if (Blockly.selected) {
        Blockly.copy_(Blockly.selected);
        Blockly.selected.dispose(true, true);
    }
};

/** Wraps the blockly 'copy' functionality. */
Ardublockly.blocklyCopy = function () {
    if (Blockly.selected) {
        Blockly.copy_(Blockly.selected);
    }
};

/** Wraps the blockly 'paste' functionality. */
Ardublockly.blocklyPaste = function () {
    if (Blockly.clipboardXml_) {
        Blockly.hideChaff();
        Blockly.mainWorkspace.paste(Blockly.clipboardXml_, true);
    }
};

/** Wraps the blockly 'delete' functionality. */
Ardublockly.blocklyDelete = function () {
    if (Blockly.selected && Blockly.selected.isDeletable()) {
        Blockly.hideChaff();
        Blockly.selected.dispose(true, true);
    }
};

/** @return {XMLHttpRequest} An XML HTTP Request multi-browser compatible. */
Ardublockly.ajaxRequest = function () {
    var request;
    try {
        // Firefox, Chrome, IE7+, Opera, Safari
        request = new XMLHttpRequest();
    } catch (e) {
        try {
            // IE6 and earlier
            request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
                request = null;
                throw 'Your browser does not support AJAX';
            }
        }
    }
    return request;
};
