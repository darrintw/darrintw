/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.require('Blockly.Arduino');

/**
 * Function for 'set Pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_digitalwrite'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

Blockly.Arduino['io_digitalwrite_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';

    /*
    Pin = removeHighlightText(Pin);
    if (Pin.match(pinRegexp)) {
        Blockly.Arduino.reservePin(
            block, Pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

        var pinSetupCode = 'pinMode(' + Pin + ', OUTPUT);';
        Blockly.Arduino.addSetup('io_' + Pin, pinSetupCode, false);

        block.prefixCode = '';
    } else {
        block.prefixCode = 'pinMode(' + Pin + ', OUTPUT);\n';
    }
    */
    return code;
};

/**
 * Function for reading a digital Pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_digitalread'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalRead(' + pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_digitalread_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'digitalRead(' + pin + ')';

    /*
    Pin = removeHighlightText(Pin);
    if (Pin.match(pinRegexp)) {
        Blockly.Arduino.reservePin(
            block, Pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

        var pinSetupCode = 'pinMode(' + Pin + ', INPUT);';
        Blockly.Arduino.addSetup('io_' + Pin, pinSetupCode, false);

        block.prefixCode = '';
    } else {
        block.prefixCode = 'pinMode(' + Pin + ', INPUT);\n';
    }
    */
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for setting the state (Y) of a built-in LED (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_builtin_led'] = function (block) {
    var pin = block.getFieldValue('BUILT_IN_LED');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Set LED');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for setting the state (Y) of an analogue output (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { analogWrite(X, Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_analogwrite'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    // Warn if the input value is out of range
    if ((stateOutput < 0) || (stateOutput > 255)) {
        block.setWarningText('The analogue value set must be between 0 and 255',
            'pwm_value');
    } else {
        block.setWarningText(null, 'pwm_value');
    }

    var code = 'analogWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

Blockly.Arduino['io_analogwrite_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'analogWrite(' + pin + ', ' + stateOutput + ');\n';

    /*
    Pin = removeHighlightText(Pin);
    if (Pin.match(pinRegexp)) {
        Blockly.Arduino.reservePin(
            block, Pin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

        var pinSetupCode = 'pinMode(' + Pin + ', OUTPUT);';

        block.prefixCode = '';
    } else {
    }
    */

    return code;
};

/**
 * Function for reading an analogue Pin value (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { analogRead(X)      }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_analogread'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'analogRead(' + pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_analogread_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'analogRead(' + pin + ')';

    /*
    Pin = removeHighlightText(Pin);
    if (Pin.match(pinRegexp)) {
        Blockly.Arduino.reservePin(
            block, Pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

        var pinSetupCode = 'pinMode(' + Pin + ', INPUT);';
        Blockly.Arduino.addSetup('io_' + Pin, pinSetupCode, false);

        block.prefixCode = '';
    } else {
        block.prefixCode = 'pinMode(' + Pin + ', INPUT);\n';
    }
    */

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsein'] = function (block) {
    var pin = block.getFieldValue("PULSEPIN");
    var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.INPUT, 'Pulse Pin');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'pulseIn(' + pin + ', ' + type + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsetimeout'] = function (block) {
    var pin = block.getFieldValue("PULSEPIN");
    var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);
    var timeout = Blockly.Arduino.valueToCode(block, "TIMEOUT", Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.INPUT, 'Pulse Pin');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'pulseIn(' + pin + ', ' + type + ', ' + timeout + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsetimeout_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);
    var timeout = Blockly.Arduino.valueToCode(block, "TIMEOUT", Blockly.Arduino.ORDER_ATOMIC);

    var code = 'pulseIn(' + pin + ', ' + type + ', ' + timeout + ')';

    /*
    Pin = removeHighlightText(Pin);
    if (Pin.match(pinRegexp)) {
        Blockly.Arduino.reservePin(
            block, Pin, Blockly.Arduino.PinTypes.INPUT, 'Pulse Pin');

        var pinSetupCode = 'pinMode(' + Pin + ', INPUT);\n';
        Blockly.Arduino.addSetup('io_' + Pin, pinSetupCode, false);

        block.prefixCode = '';
    } else {
        block.prefixCode = 'pinMode(' + Pin + ', INPUT);\n';
    }
    */

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for the map block.
 * Arduino code: loop { map(x, 0, 1024, 0, y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['base_map'] = function (block) {
    var valueNum = Blockly.Arduino.valueToCode(
        block, 'NUM', Blockly.Arduino.ORDER_NONE) || '0', valueDmax = Blockly.Arduino.valueToCode(
        block, 'DMAX', Blockly.Arduino.ORDER_ATOMIC) || '0',
        code = 'map(' + valueNum + ', 0, 1024, 0, ' + valueDmax + ')';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/**
 * Function for turning the tone library on on a given Pin (X).
 * Arduino code: setup { pinMode(X, OUTPUT) }
 *               loop  { tone(X, frequency) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['io_tone'] = function (block) {
    var pin = block.getFieldValue('TONEPIN');
    var freq = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'tone(' + pin + ',' + freq + ');\n';
    return code;
};

Blockly.Arduino['io_notone'] = function (block) {
    var pin = block.getFieldValue("TONEPIN");
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'noTone(' + pin + ');\n';
    return code;
};