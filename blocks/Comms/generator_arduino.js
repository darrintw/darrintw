'use strict';

goog.provide('Blockly.Arduino.serial');

goog.require('Blockly.Arduino');


/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['serial_print'] = function (block) {
    var serialId = block.getFieldValue('SERIAL_ID');
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.PinTypes.SERIAL, 'SERIAL_' + serialPins[i][0]);
    }
    var code;
    if (new_line) {
        code = serialId + '.println(' + content + ');\n';
    } else {
        code = serialId + '.print(' + content + ');\n';
    }
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['serial_print_hex'] = function (block) {
    var serialId = block.getFieldValue('SERIAL_ID');
    var decimal = block.getFieldValue('STAT');
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.PinTypes.SERIAL, 'SERIAL_' + serialPins[i][0]);
    }

    var code;
    if (new_line) {
        code = serialId + '.println(' + content + ', ' + decimal + ');\n';
    } else {
        code = serialId + '.print(' + content + ', ' + decimal + ');\n';
    }

    return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['serial_setup'] = function (block) {
    var serialId = block.getFieldValue('SERIAL_ID');
    var serialSpeed = block.getFieldValue('SPEED');
    var serialSetupCode = serialId + '.begin(' + serialSpeed + ');';
    Blockly.Arduino.addSetup('serial_' + serialId, serialSetupCode, true);
    return '';
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['serial_available'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = serialId + '.available()';

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.PinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
    }

    //Blockly.Arduino.addSetup('serial_' + serialId, 'Serial.begin(9600);', false);

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['serial_read_char'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.PinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
    }

    var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';
    var code = serialId + '.read()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['serial_read_string'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.PinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
    }

    var func = [];
    func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(HardwareSerial *serial) {');
    func.push('  String content = "";');
    func.push('  content += (char)serial->read();');
    func.push('  return content;');
    func.push('}');
    var funcName = Blockly.Arduino.addFunction(
        'getSerialChar', func.join('\n'));

    var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';
    var code = funcName + '(&' + serialId + ')';

    //Blockly.Arduino.addSetup('serial_' + serialId, 'Serial.begin(9600);', false);

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['bluetooth'] = function (block) {
    var rx_pin = block.getFieldValue('RX_PIN');
    var tx_pin = block.getFieldValue('TX_PIN');
    var baudrate = block.getFieldValue('BAUDRATE');
    var bluetoothCode = 'BT.begin(' + baudrate + ');';

    Blockly.Arduino.addInclude('bt', '#include <SoftwareSerial.h>');
    Blockly.Arduino.addDeclaration('bt', 'SoftwareSerial BT(' + tx_pin + ', ' + rx_pin + '); //藍芽端接收腳對應Arduino傳送腳, 藍芽端傳送腳對應Arduino接收腳');
    Blockly.Arduino.addSetup('bt', bluetoothCode, true);
    var code = '';
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['bluetooth_available'] = function () {
    var code = 'BT.available()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['bluetooth_read'] = function (block) {
    var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';
    var code = 'BT.read()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['bluetooth_print'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var checkbox_name = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var code;
    if (checkbox_name) {
        code = 'BT.println(' + content + ');\n';
    } else {
        code = 'BT.print(' + content + ');\n';
    }
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['bluetooth_at_command'] = function (block) {
    var hc_type = block.getFieldValue("HC_TYPE");
    var at_command = block.getFieldValue("CMD");
    var value = block.getFieldValue("VALUE");
    var conn = "";
    if (hc_type === "HC-05") {
        conn = "="
    }
    var code = "\"AT+" + at_command + conn + value + "\"";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['bluetooth_at_cmd'] = function (block) {
    var cmd = block.getFieldValue("CMD");

    var code = "\"" + cmd + "\"";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['softwareserial_setup'] = function (block) {
    var serialName = block.getFieldValue('SERIAL_ID');
    var serialId = Blockly.Arduino.variableDB_.getName(
        serialName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var baudrate = block.getFieldValue('BAUDRATE');
    var rx_pin = block.getFieldValue('RX_PIN');
    var tx_pin = block.getFieldValue('TX_PIN');
    var serialVarCode = 'SoftwareSerial ' + serialId + '(' + rx_pin + ',' + tx_pin + ');';
    var serialSetupCode = serialId + '.begin(' + baudrate + ');';

    Blockly.Arduino.reservePin(block, rx_pin,
        Blockly.Arduino.PinTypes.SERIAL, 'SOFTWARE SERIAL');
    Blockly.Arduino.reservePin(block, tx_pin,
        Blockly.Arduino.PinTypes.SERIAL, 'SOFTWARE SERIAL');

    Blockly.Arduino.addInclude('softwareserial_', '#include <SoftwareSerial.h>');
    Blockly.Arduino.addVariable(serialName, serialVarCode, true);
    Blockly.Arduino.addSetup('softwareserial_' + serialId, serialSetupCode, true);
    var code = '';
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['softwareserial_available'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = serialId + '.available()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['softwareserial_read'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var func = [];
    func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(SoftwareSerial *serial) {');
    func.push('  String content = "";');
    func.push('  content += (char)serial->read();');
    func.push('  return content;');
    func.push('}');
    var funcName = Blockly.Arduino.addFunction(
        'getSoftwareSerialChar', func.join('\n'));

    var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';
    var code = funcName + '(&' + serialId + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['softwareserial_print'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var newline = (block.getFieldValue('NEW_LINE') === 'TRUE');

    var code = newline ?
        (serialId + '.println(' + content + ');\n') :
        (serialId + '.print(' + content + ');\n');

    return code;
};
