/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.I2CLCD');

goog.require('Blockly.Blocks');

Blockly.Blocks.I2CLCD.HUE = 180;

Blockly.Blocks['I2CLCD_scan'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_SCAN);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['I2CLCD_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_SETUP_MSG1)
            .appendField(new Blockly.FieldTextInput("0x3F"), "I2C_ADDR")
            .appendField(new Blockly.FieldDropdown([["16", "16"], ["20", "20"]]), "COL")
            .appendField("x")
            .appendField(new Blockly.FieldDropdown([["2", "2"], ["4", "4"]]), "ROW")
            .appendField(Blockly.Msg.ARD_I2CLCD_SETUP_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_SETUP_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

/*
Blockly.Blocks['I2CLCD_printLine'] = {
    /!**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     *!/
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG1)
            .appendField(new Blockly.FieldDropdown([["1", "0"], ["2", "1"]]), "ROW")
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG2);
        this.appendValueInput("CONTENT")
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG3)
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_PRINTLINE_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};
*/

Blockly.Blocks['I2CLCD_move'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_MOVE_MSG1);
        this.appendValueInput("X")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_MOVE_MSG2);
        this.appendValueInput("Y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_MOVE_MSG3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_MOVE_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_clear'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_CLEAR_MSG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_CLEAR_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("CONTENT")
            .setCheck(null)
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINT_MSG1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINT_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_PRINT_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_backlightOn'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_MSG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_backlightOff'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_MSG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};
