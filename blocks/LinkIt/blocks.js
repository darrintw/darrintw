/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.linkit');

goog.require('Blockly.Arduino');

Blockly.Blocks.linkit.HUE = 35;

Blockly.Blocks.linkit.image = 'img/linkit_7697.png';

Blockly.Blocks['linkit_wifi_wait_until_ready'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_UNTIL_READY_TITLE);
        this.appendValueInput("SSID")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
        this.appendValueInput("PASSWORD")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_disconnect'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CATEGORY_LINKIT_WIFI_DISCONNECT);
        this.setPreviousStatement(true, Blockly.Types.STRING.output);
        this.setNextStatement(true, Blockly.Types.STRING.output);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_getip'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CATEGORY_LINKIT_WIFI_GETIP);
        this.setOutput(true, "String");
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};
Blockly.Blocks['mcs'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_MCS_WIFI)
        this.appendValueInput("DEVICEID")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEID);
        this.appendValueInput("DEVICEKEY")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEKEY);
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcslite'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_WIFI)
        this.appendValueInput("DEVICEIDL")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEID);
        this.appendValueInput("DEVICEKEYL")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEKEY);
        this.appendValueInput("SERV")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_SERV);
        this.appendValueInput("PORT")
            .setCheck(Blockly.Types.NUMBER.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_PORT);
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcs_set_control_channel'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.VARIABLES_TYPE_ONOFF, "boolean"],
                [Blockly.Msg.VARIABLES_TYPE_CATEGORY, "category"],
                [Blockly.Msg.VARIABLES_TYPE_NUMBER, "int"],
                [Blockly.Msg.VARIABLES_TYPE_FLOAT, "float"],
                [Blockly.Msg.VARIABLES_TYPE_STRING, "String"]
            ]), "TYPE")
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TAIL);
        this.appendValueInput("CONTROL_CHANNEL")
            .setCheck(Blockly.Types.STRING.output);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcs_set_display_channel'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.VARIABLES_TYPE_ONOFF, "boolean"],
                [Blockly.Msg.VARIABLES_TYPE_CATEGORY, "category"],
                [Blockly.Msg.VARIABLES_TYPE_NUMBER, "int"],
                [Blockly.Msg.VARIABLES_TYPE_FLOAT, "float"],
                [Blockly.Msg.VARIABLES_TYPE_STRING, "String"]
            ]), "TYPE")
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL2_TAIL);
        this.appendValueInput("DISPLAY_CHANNEL")
            .setCheck(Blockly.Types.STRING.output);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcs_process'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_MCS_PROCESS_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcs_channel_value'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendValueInput("CHANNEL_VALUE")
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TITLE)
            .setCheck(Blockly.Types.STRING.output);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TAIL);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['mcs_channel2_value'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendValueInput("CHANNEL2_VALUE")
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TITLE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Types.STRING.output);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TAIL);
        this.appendValueInput("SET_VALUE");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['mcs_channel_updated'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendValueInput("CHANNEL_UPDATED")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.CATEGORY_LINKIT_MCS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_MCS_LED_UPDATED);
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['linkit_ble_ibeacon'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_IBEACON_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_TITLE)
            .setAlign(Blockly.ALIGN_RIGHT);
        //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkitbeacon.image, 64, 43));
        this.appendValueInput("UUID")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_UUID);
        this.appendValueInput("MAJOR")
            .setCheck(Blockly.Types.NUMBER.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_MAJOR);
        this.appendValueInput("MINOR")
            .setCheck(Blockly.Types.NUMBER.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_MINOR);
        this.appendValueInput("RSSI")
            .setCheck(Blockly.Types.NUMBER.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_RSSI);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_IBEACON_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_eddy'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY);
        // this.appendDummyInput()
        //   .setAlign(Blockly.ALIGN_RIGHT)
        //   .appendField(new Blockly.FieldDropdown([
        //     [Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTP,"http"],
        //     [Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTPS,"https"]
        //   ]), "TYPE");
        this.appendValueInput("URL")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_URL);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_periphral'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TITLE)
        //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkitble.image, 64, 43));
        this.appendValueInput("NAME")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_NAME);
        this.appendValueInput("SERVICE")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SERVICE);
        this.appendStatementInput("BLE_CONTENT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_get_address'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_GET_ADDRESS_TITLE);
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['linkit_ble_Characteristic'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC);
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SEC);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TYPE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_NUMBER, "LBLECharacteristicInt"], [Blockly.Msg.VARIABLES_TYPE_STRING, "LBLECharacteristicString"]]), 'CHARACTERISTIC_TYPE');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_LBLE_ATTRIBUTE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_LBLE_READ_WRITE, "LBLE_READ | LBLE_WRITE"], [Blockly.Msg.LINKIT_SET_LBLE_READ, "LBLE_READ"], [Blockly.Msg.LINKIT_SET_LBLE_WRITE, "LBLE_WRITE"]]), 'TYPE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_periphral_is_written'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN_TAIL);
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['linkit_ble_periphral_get_value'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.STRING.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);
        this.setInputsInline(true);
        this.setOutput(true, ["Number", "String"]);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER, Blockly.Types.STRING;
    }
};

Blockly.Blocks['linkit_ble_periphral_write'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_WRITE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.VARIABLES_TYPE_NUMBER, "int"],
                [Blockly.Msg.VARIABLES_TYPE_STRING, "String"]
            ]), "TYPE");
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.STRING.output)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_central_get_peripheral_with_index'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.interpolate_(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_GET_PERIPHERAL_WITH_INDEX,
            ['INDEX', 'Number', Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['linkit_ble_central_scan_count'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_COUNT);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['linkit_ble_central_scan'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_wait_until_ready'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_UNTIL_READY_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_ready'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_READY_TITLE);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};