/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.rtc');
goog.require('Blockly.Blocks');

Blockly.Blocks.rtc.HUE = 180;

var RTCTypeList = [['DS1307', 'RtcDS1307'], ['DS3231', 'RtcDS3231']];

//時鐘模組
var RTC_TIME_TYPE;

//DS1302 RTC
Blockly.Blocks['DS1302_init'] = {
    init: function () {
        this.setColour(Blockly.Blocks.rtc.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ADR_RTC_DS1302_INITPIN);
        this.appendValueInput("RST", Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("RST#");
        this.appendValueInput("DAT")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("DAT#");
        this.appendValueInput("CLK")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CLK#");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ADR_RTC_TOOLTIP_DS1302_INIT);
    }
}

//DS1307 RTC
Blockly.Blocks['DS1307_init'] = {
    init: function () {
        RTC_TIME_TYPE = [
            [Blockly.Msg.ADR_RTC_YEAR, 'Year'],
            [Blockly.Msg.ADR_RTC_MONTH, 'Month'],
            [Blockly.Msg.ADR_RTC_DAY, 'Day'],
            [Blockly.Msg.ADR_RTC_HOUR, 'Hour'],
            [Blockly.Msg.ADR_RTC_MINUTE, 'Minute'],
            [Blockly.Msg.ADR_RTC_SECOND, 'Second'],
            [Blockly.Msg.ADR_RTC_WEEK, 'DayOfWeek']
        ],
        this.setColour(Blockly.Blocks.rtc.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ADR_RTC_INIT);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(RTCTypeList), 'RTCType');
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PIN);
        this.appendValueInput("SDA")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("SDA#");
        this.appendValueInput("SCL")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("SCL#");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ADR_RTC_TOOLTIP_INIT);
    },
};

//獲取RTC時間
Blockly.Blocks['RTC_get_rtc'] = {
    init: function () {
        this.setColour(Blockly.Blocks.rtc.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("RTC" + Blockly.Msg.ADR_RTC_GETTIME);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ADR_RTC_TOOLTIP_GETTIME.replace('%1', this.getFieldValue("TIME_TYPE")));
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

//設定RTC日期時間
Blockly.Blocks['RTC_set_datetime'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("RTC" + Blockly.Msg.ADR_RTC_SETTIME);
        this.appendValueInput("date")
            .appendField(Blockly.Msg.ADR_RTC_DATE);
        this.appendValueInput("time")
            .appendField(Blockly.Msg.ADR_RTC_TIME);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.rtc.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//設定時間
Blockly.Blocks['RTC_set_time'] = {
    init: function () {
        this.setColour(Blockly.Blocks.rtc.HUE);
        this.appendValueInput("hour");
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ADR_RTC_HOUR);
        this.appendValueInput("minute");
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ADR_RTC_MINUTE);
        this.appendValueInput("second");
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ADR_RTC_SECOND);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.ADR_RTC_TOOLTIP_SETTIME);
    }
};

//設定日期
Blockly.Blocks['RTC_set_date'] = {
    init: function () {
        this.setColour(Blockly.Blocks.rtc.HUE);
        this.appendValueInput("year");
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ADR_RTC_YEAR);
        this.appendValueInput("month");
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ADR_RTC_MONTH);
        this.appendValueInput("day");
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ADR_RTC_DAY);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.ADR_RTC_TOOLTIP_SETDATE);
    }
};

//獲取系統時間
Blockly.Blocks['get_system_date_time'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_RTC_GET + " " + Blockly.Msg.ADR_RTC_SYSTEM)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADR_RTC_DATE, "DATE"], [Blockly.Msg.ADR_RTC_TIME, "TIME"]]), "type");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.rtc.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};