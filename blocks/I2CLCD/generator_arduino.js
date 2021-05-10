/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */
'use strict';

goog.provide('Blockly.Arduino.I2CLCD');

goog.require('Blockly.Arduino');


function initI2CLCD(block, i2cAddr, replace, row, col) {
    var i2cLCDDeclareCode =
        'LiquidCrystal_I2C I2CLCD(' + i2cAddr + ', ' + col + ', ' + row + ');';
    var i2cLCDSetupCode = 'I2CLCD.begin();';

    Blockly.Arduino.addInclude('Wire_tag', '#include <Wire.h>');
    Blockly.Arduino.addInclude('I2CLCD_tag', '#include <LiquidCrystal_I2C.h>');

    if (replace === true && Blockly.Arduino.definitions_['I2CLCD_tag'] !== undefined) {
        Blockly.Arduino.definitions_['I2CLCD_tag'] = i2cLCDDeclareCode;
    } else {
        Blockly.Arduino.addDeclaration('I2CLCD_tag', i2cLCDDeclareCode);
    }

    Blockly.Arduino.addSetup('I2CLCD_tag', i2cLCDSetupCode, replace);

    var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
    for (var i = 0; i < i2cPins.length; i++) {
        Blockly.Arduino.reservePin(block, i2cPins[i][1],
            Blockly.Arduino.PinTypes.I2C, 'I2C ' + i2cPins[i][0]);
    }
}
/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2CLCD_scan'] = function (block) {
    Blockly.Arduino.addInclude("I2CSCAN", "#include <Wire.h>")
    var setup = 'Wire.begin();\n' +
        '  Serial.begin(9600);\n' +
        '  while (!Serial);\n' +
        '  Serial.println("\\nI2C 掃描器");\n' +
        '  Serial.print("SDA腳位: ");\n' +
        '  Serial.println(SDA);\n' +
        '  Serial.print("SCL腳位: ");\n' +
        '  Serial.println(SCL);';
    Blockly.Arduino.addSetup("I2CSCAN", setup, true);
    var code = '  byte error, address;\n' +
        '  int nDevices;\n' +
        '\n' +
        '  Serial.println("掃描中...");\n' +
        '\n' +
        '  nDevices = 0;\n' +
        '  for (address = 1; address < 127; address++ )\n' +
        '  {\n' +
        '    /*\n' +
        '      使用 Wire.endTransmission(addreee)確認在該位址是否有資料\n' +
        '    */\n' +
        '    Wire.beginTransmission(address);\n' +
        '    error = Wire.endTransmission();\n' +
        '\n' +
        '    if (error == 0)\n' +
        '    {\n' +
        '      Serial.print("在 0x");\n' +
        '      if (address < 16)\n' +
        '        Serial.print("0");\n' +
        '      Serial.print(address, HEX);\n' +
        '      Serial.println(" 找到I2C設備！");\n' +
        '\n' +
        '      nDevices++;\n' +
        '    }\n' +
        '    else if (error == 4)\n' +
        '    {\n' +
        '      Serial.print("0x");\n' +
        '      if (address < 16)\n' +
        '        Serial.print("0");\n' +
        '      Serial.print(address, HEX);\n' +
        '      Serial.println(" 發生未知錯誤");\n' +
        '    }\n' +
        '  }\n' +
        '  if (nDevices == 0)\n' +
        '  {\n' +
        '    Serial.println("未找到任何I2C設備\\n");\n' +
        '  }\n' +
        '  else\n' +
        '  {\n' +
        '    Serial.println("完成\\n");\n' +
        '  }\n' +
        '\n' +
        '  delay(5000); // 每5秒掃描一次';
    return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2CLCD_setup'] = function (block) {
    var i2cAddr = block.getFieldValue('I2C_ADDR');
    var row = block.getFieldValue('ROW');
    var col = block.getFieldValue('COL');
    initI2CLCD(block, i2cAddr, true, row, col);
    var code = '';
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['I2CLCD_move'] = function (block) {
    var x = Blockly.Arduino.valueToCode(
        block, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var y = Blockly.Arduino.valueToCode(
        block, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'I2CLCD.setCursor(' + x + ', ' + y + ');\n'
    return code;
};

Blockly.Arduino['I2CLCD_clear'] = function (block) {

    var code = 'I2CLCD.clear();\n'
    return code;
};

Blockly.Arduino['I2CLCD_print'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'I2CLCD.print(' + content + ');\n'
    return code;
};

Blockly.Arduino['I2CLCD_backlightOn'] = function (block) {
    var code = 'I2CLCD.backlight();\n';
    return code;
};

Blockly.Arduino['I2CLCD_backlightOff'] = function (block) {
    var code = 'I2CLCD.noBacklight();\n';
    return code;
};
