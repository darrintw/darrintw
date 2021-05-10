/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Blocks for the Arduino serial communication functions.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: There are more function that can be added:
 *       http://arduino.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.serial.HUE = 120;

Blockly.Blocks['serial_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Serial/Begin');
        this.setColour(Blockly.Blocks.serial.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_SETUP)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_SPEED)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Arduino.Boards.selected.serialSpeed), 'SPEED')
            .appendField(Blockly.Msg.ARD_SERIAL_BPS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_SETUP_TIP);
    },
    /**
     * Returns the serial instance name.
     * @return {?string} Serial instance name.
     * @this Blockly.Block
     */
    getSerialSetupInstance: function () {
        return this.getFieldValue('SERIAL_ID');
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SPEED', 'serialSpeed');
    }
};

Blockly.Blocks['serial_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
        this.setColour(Blockly.Blocks.serial.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT);
        this.appendValueInput('CONTENT');
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
    },
    /**
     * Called whenever anything on the workspace changes.
     * It checks the instances of serial_setup and attaches a warning to this
     * block if not valid data is found.
     * @this Blockly.Block
     */
    /*
    onchange: function (event) {
        if (!this.workspace || event.type === Blockly.Events.MOVE ||
            event.type === Blockly.Events.UI) {
            return;  // Block deleted or irrelevant event
        }

        // Get the Serial instance from this block
        var thisInstanceName = this.getFieldValue('SERIAL_ID');
        console.log(thisInstanceName);
        // Iterate through top level blocks to find setup instance for the serial id
        var blocks = Blockly.mainWorkspace.getTopBlocks();
        var setupInstancePresent = false;
        for (var x = 0; x < blocks.length; x++) {
            var func = blocks[x].getSerialSetupInstance;
            console.log(func);
            if (func) {
                var setupBlockInstanceName = func.call(blocks[x]);
                if (thisInstanceName === setupBlockInstanceName) {
                    setupInstancePresent = true;
                    break;
                }
            }
        }

        if (!setupInstancePresent) {
            this.setWarningText(Blockly.Msg.ARD_SERIAL_PRINT_WARN.replace('%1',
                thisInstanceName), 'serial_setup');
        } else {
            this.setWarningText(null, 'serial_setup');
        }
    },
    */
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

Blockly.Blocks['serial_print_hex'] = {
    init: function () {
        this.setColour(Blockly.Blocks.serial.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT);
        this.appendValueInput("CONTENT", Number);
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ARD_MATH_HEX, "HEX"],
                [Blockly.Msg.ARD_MATH_BIN, "BIN"],
                [Blockly.Msg.ARD_MATH_OCT, "OCT"],
                [Blockly.Msg.ARD_MATH_DEC, "DEC"]
            ]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_HEX_TOOLTIP);
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};
Blockly.Blocks['serial_available'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SERIAL_AVAILABLE_MSG,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "SERIAL_ID",
                    "options": Blockly.Arduino.Boards.selected.serial
                }
            ],
            "output": Blockly.Types.BOOLEAN.output,
            "colour": Blockly.Blocks.serial.HUE,
            "tooltip": Blockly.Msg.ARD_SERIAL_AVAILABLE_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    },
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};


Blockly.Blocks['serial_read_string'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SERIAL_READ_STRING_MSG,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "SERIAL_ID",
                    "options": Blockly.Arduino.Boards.selected.serial
                }
            ],
            "output": Blockly.Types.STRING.output,
            "colour": Blockly.Blocks.serial.HUE,
            "tooltip": Blockly.Msg.ARD_SERIAL_READ_STRING_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType:
        function () {
            return Blockly.Types.STRING;
        },
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};


Blockly.Blocks['serial_read_char'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SERIAL_READ_CHAR_MSG,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "SERIAL_ID",
                    "options": Blockly.Arduino.Boards.selected.serial
                }
            ],
            "output": Blockly.Types.STRING.output,
            "colour": Blockly.Blocks.serial.HUE,
            "tooltip": Blockly.Msg.ARD_SERIAL_READ_CHAR_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType:
        function () {
            return Blockly.Types.CHARACTER;
        },
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};


Blockly.Blocks['bluetooth'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_BLUETOOTH)
            .appendField(Blockly.Msg.ARD_SERIAL_RX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "RX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_TX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_BAUDRATE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.serialSpeed), "BAUDRATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.serial.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['bluetooth_available'] = {
    /**
     * Block for check bluetooth.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AVAILABLE_MSG);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.serial.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['bluetooth_read'] = {
    /**
     * Block for bluetooth read data.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_READ_MSG);
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.serial.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.CHARACTER;
    }
};

Blockly.Blocks['bluetooth_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
        this.setColour(Blockly.Blocks.serial.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_WRITE_MSG);
        this.appendValueInput('CONTENT');
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
    }
};

var at_command_list = [["版本", "VERSION"], ["更名", "NAME"], ["MAC位址", "ADDR"]];

Blockly.Blocks['bluetooth_at_command'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["HC-05", "HC-05"], ["HC-06", "HC-06"]]), "HC_TYPE")
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_MSG)
            .appendField(new Blockly.FieldDropdown(at_command_list), "CMD")
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_AS)
            .appendField(new Blockly.FieldTextInput(""), "VALUE");
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.serial.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
     /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['bluetooth_at_cmd'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_MSG)
            .appendField(new Blockly.FieldTextInput(""), "CMD");
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.serial.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['softwareserial_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_MSG)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "SERIAL_ID");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_RX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "RX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_TX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_BAUDRATE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.serialSpeed), "BAUDRATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.serial.HUE);
        this.setTooltip(Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_TIP);
        this.setHelpUrl("https://www.arduino.cc/en/Reference/SoftwareSerial");
    }
};

Blockly.Blocks['softwareserial_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_MSG,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "SERIAL_ID",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                },
                {
                    "type": "input_value",
                    "name": "CONTENT"
                },
                {
                    "type": "field_checkbox",
                    "name": "NEW_LINE",
                    "checked": true
                }
            ],
            "inputsInline": true,
            "previousStatement": true,
            "nextStatement": true,
            "colour": Blockly.Blocks.serial.HUE,
            "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialPrint'
        });
    }
};

Blockly.Blocks['softwareserial_available'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_MSG,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "SERIAL_ID",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                }
            ],
            "output": Blockly.Types.NUMBER.output,
            "colour": Blockly.Blocks.serial.HUE,
            "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['softwareserial_read'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SOFTWARESERIAL_READ_MSG,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "SERIAL_ID",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                }
            ],
            "output": Blockly.Types.STRING.output,
            "colour": Blockly.Blocks.serial.HUE,
            "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_READ_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};