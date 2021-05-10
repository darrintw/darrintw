/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.rtc');

goog.require('Blockly.Arduino');

//DS1302
Blockly.Arduino['DS1302_init'] = function (block) {
    var dropdown_rst = Blockly.Arduino.valueToCode(block, 'RST', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_dat = Blockly.Arduino.valueToCode(block, 'DAT', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_clk = Blockly.Arduino.valueToCode(block, 'CLK', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.addDefine('include_ThreeWire', '#include <ThreeWire.h>');
    Blockly.Arduino.addDefine(['include_RtcDS1302'], '#include <RtcDS1302.h>');
    //Blockly.Arduino.definitions_['var_declare_RtcDateTime_dt'] = 'const RtcDateTime dt;';
    Blockly.Arduino.addDefine('var_declare_ThreeWire', 'ThreeWire ' + 'myWire(' + dropdown_dat + ',' + dropdown_clk + ',' + dropdown_rst + ');');
    Blockly.Arduino.addDefine('var_declare_RtcDS1302', 'RtcDS1302<ThreeWire> Rtc(myWire);');
    Blockly.Arduino.addSetup('setup_Rtc.Begin', 'Rtc.Begin();\n  Rtc.SetIsRunning(true);');
    return "";
};

Blockly.Arduino['DS1307_init'] = function (block) {
    var SDA = Blockly.Arduino.valueToCode(block, 'SDA', Blockly.Arduino.ORDER_ATOMIC);
    var SCL = Blockly.Arduino.valueToCode(block, 'SCL', Blockly.Arduino.ORDER_ATOMIC);
    var RTCType = block.getFieldValue('RTCType');
    Blockly.Arduino.addDefine('include_' + RTCType, '#include <' + RTCType + '.h>');
    //Blockly.Arduino.definitions_['var_declare_RtcDateTime_dt'] = 'const RtcDateTime dt;';
    if (SDA != "SDA" || SCL != "SCL") {
        Blockly.Arduino.addDefine('include_SoftwareWire', '#include <SoftwareWire.h>');
        Blockly.Arduino.addDefine('var_declare_SoftwareWire', 'SoftwareWire myWire(' + SDA + ',' + SCL + ');');
        Blockly.Arduino.addDefine('var_declare_' + RTCType, RTCType + '<SoftwareWire> Rtc(myWire);');
    } else {
        Blockly.Arduino.addDefine('include_Wire', '#include <Wire.h>');
        Blockly.Arduino.addDefine('var_declare_' + RTCType, RTCType + '<TwoWire> Rtc(Wire);');
    }
    Blockly.Arduino.addSetup('setup_Rtc.Begin', 'Rtc.Begin();\n  Rtc.SetIsRunning(true);');
    return "";
};

Blockly.Arduino['RTC_get_rtc'] = function (block) {
    var timeType = block.getFieldValue('TIME_TYPE');
    var code = 'Rtc.GetDateTime().' + timeType + '()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['RTC_set_datetime'] = function (block) {
    var value_date = Blockly.Arduino.valueToCode(block, 'date', Blockly.Arduino.ORDER_ATOMIC);
    var value_time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    code = 'Rtc.SetDateTime(RtcDateTime(' + value_date + ', ' + value_time + '));\n';
    return code;
};

Blockly.Arduino['RTC_set_time'] = function (block) {
    var hour = Blockly.Arduino.valueToCode(block, "hour", Blockly.Arduino.ORDER_ATOMIC);
    var minute = Blockly.Arduino.valueToCode(block, "minute", Blockly.Arduino.ORDER_ATOMIC);
    var second = Blockly.Arduino.valueToCode(block, "second", Blockly.Arduino.ORDER_ATOMIC);
    if (hour.length == 1)
        hour = '0' + hour;
    if (minute.length == 1)
        minute = '0' + minute;
    if (second.length == 1)
        second = '0' + second;
    var code = '"' + hour + ':' + minute + ':' + second + '"';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['RTC_set_date'] = function (block) {
    var year = Blockly.Arduino.valueToCode(block, "year", Blockly.Arduino.ORDER_ATOMIC);
    var month = Blockly.Arduino.valueToCode(block, "month", Blockly.Arduino.ORDER_ATOMIC);
    var day = Blockly.Arduino.valueToCode(block, "day", Blockly.Arduino.ORDER_ATOMIC);

    switch (month) {
        case '1':
            month = 'Jan';
            break;
        case '2':
            month = 'Feb';
            break;
        case '3':
            month = 'Mar';
            break;
        case '4':
            month = 'Apr';
            break;
        case '5':
            month = 'May';
            break;
        case '6':
            month = 'Jun';
            break;
        case '7':
            month = 'Jul';
            break;
        case '8':
            month = 'Aug';
            break;
        case '9':
            month = 'Sep';
            break;
        case '10':
            month = 'Oct';
            break;
        case '11':
            month = 'Nov';
            break;
        case '12':
            month = 'Dec';
            break;
        default:
            month = 'Jan';
    }
    if (day.length == 1)
        day = '0' + day;
    var code = '"' + month + '/' + day + '/' + year + '"';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//取得系統時間
Blockly.Arduino['get_system_date_time'] = function (block) {
    var dropdown_type = block.getFieldValue('type');
    var code = '__' + dropdown_type + '__';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};