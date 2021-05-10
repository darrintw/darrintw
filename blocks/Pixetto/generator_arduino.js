/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

goog.provide('Blockly.Arduino.Pixetto');

goog.require('Blockly.Arduino');

/** . */
Blockly.Arduino['pixetto_setup'] = function (block) {
    var rxPin = block.getFieldValue('PIXETTO_RX');
    var txPin = block.getFieldValue('PIXETTO_TX');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude('pixetto', '#include <Pixetto.h>');
    Blockly.Arduino.addVariable("ss", 'Pixetto ' + pixettoId + '(' + rxPin + ', ' + txPin + ');', true);

    var code = pixettoId + '.begin();\n';

    return code;
};

/** . */
Blockly.Arduino['pixetto_detected'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.isDetected()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getfuncid'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_gettypeid'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getTypeID()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getposx'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getPosX()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getposy'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getPosY()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getwidth'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getWidth()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getheigth'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getHeight()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_function'] = function (block) {
    var pixettoFunc = block.getFieldValue('PIXETTO_FUNC_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.' + pixettoFunc;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_color'] = function (block) {
    var pixettoColor = block.getFieldValue('PIXETTO_COLOR_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.' + pixettoColor;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_shape'] = function (block) {
    var pixettoShape = block.getFieldValue('PIXETTO_SHAPE_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.' + pixettoShape;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_sign'] = function (block) {
    var pixettoSign = block.getFieldValue('PIXETTO_SIGN_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.' + pixettoSign;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_inputnum'] = function (block) {
    var pixettoNum = block.getFieldValue('PIXETTO_INNUM');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoNum;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_num'] = function (block) {
    var pixettoNum = block.getFieldValue('PIXETTO_NUM_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoNum;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/** . */
Blockly.Arduino['pixetto_latter'] = function (block) {
    var pixettoLatter= block.getFieldValue('PIXETTO_LATTER_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.' + pixettoLatter;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};