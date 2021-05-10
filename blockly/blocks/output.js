/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Blocks.output');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.output.HUE = 250;

Blockly.Blocks['io_digitalwrite'] = {
    /**
     * Block for creating a 'set Pin' to a state.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('STATE')
            .appendField(Blockly.Msg.ARD_DIGITALWRITE)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
            .appendField(Blockly.Msg.ARD_WRITE_TO)
            .setCheck(Blockly.Types.BOOLEAN.checkList);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_DIGITALWRITE_TIP);
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['io_digitalwrite_var'] = {
    /**
     * Block for creating a 'set Pin' to a state.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_DIGITALWRITE_MSG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "PIN",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "STATE",
                    "check": Blockly.Types.NUMBER.checkList
                }
            ],
            "inputsInline": true,
            "previousStatement": true,
            "nextStatement": true,
            "colour": Blockly.Blocks.output.HUE,
            "tooltip": Blockly.Msg.ARD_DIGITALWRITE_TIP,
            "helpUrl": 'http://arduino.cc/en/Reference/DigitalWrite'
        });
    }
};

Blockly.Blocks['io_analogwrite'] = {
    /**
     * Block for creating a 'set Pin' to an analogue value.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('NUM')
            .appendField(Blockly.Msg.ARD_ANALOGWRITE)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.pwmPins), 'PIN')
            .appendField(Blockly.Msg.ARD_WRITE_TO)
            //.appendField(new Blockly.FieldTextInput("100"), "DEFNUM")
            .setCheck(Blockly.Types.NUMBER.output);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_ANALOGWRITE_TIP);
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
    },
    /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    },
};


Blockly.Blocks['io_analogwrite_var'] = {
    /**
     * Block for creating a 'set Pin' to an analogue value.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_ANALOGWRITE_MSG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "PIN",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "NUM",
                    "check": Blockly.Types.NUMBER.checkList
                }
            ],
            "inputsInline": true,
            "previousStatement": true,
            "nextStatement": true,
            "colour": Blockly.Blocks.output.HUE,
            "tooltip": Blockly.Msg.ARD_ANALOGWRITE_TIP,
            "helpUrl": 'http://arduino.cc/en/Reference/AnalogWrite'
        });
    },
    /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['base_map'] = {
    /**
     * Block for creating a the map function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/map');
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('NUM')
            .appendField(Blockly.Msg.ARD_MAP)
            .setCheck(Blockly.Types.NUMBER.checkList);
        this.appendValueInput('DMAX')
            .appendField(Blockly.Msg.ARD_MAP_VAL)
            .setCheck(Blockly.Types.NUMBER.checkList);
        this.appendDummyInput()
            .appendField(']');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.ARD_MAP_TIP);
    },
    /** @return {string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['io_tone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SETTONE)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), "TONEPIN");
        this.appendValueInput("FREQUENCY")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .appendField(Blockly.Msg.ARD_TONEFREQ);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.output.HUE);
        this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
        this.setHelpUrl('https://www.arduino.cc/en/Reference/tone');
    },
    /**
     * Called whenever anything on the workspace changes.
     * It checks frequency values and sets a warning if out of range.
     * @this Blockly.Block
     */
    onchange: function (event) {
        if (!this.workspace || event.type == Blockly.Events.MOVE ||
            event.type == Blockly.Events.UI) {
            return;  // Block deleted or irrelevant event
        }
        var freq = Blockly.Arduino.valueToCode(
            this, "FREQUENCY", Blockly.Arduino.ORDER_ATOMIC)
        if (freq < 31 || freq > 65535) {
            this.setWarningText(Blockly.Msg.ARD_TONE_WARNING, 'io_tone');
        } else {
            this.setWarningText(null, 'io_tone');
        }
    },
    /** @return {Blockly.Type} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['io_notone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_NOTONE)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), "TONEPIN");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.output.HUE);
        this.setTooltip(Blockly.Msg.ARD_NOTONE_TIP);
        this.setHelpUrl('https://www.arduino.cc/en/Reference/noTone');
    },
    /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};