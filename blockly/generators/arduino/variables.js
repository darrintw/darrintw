/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Generating Arduino code for variables blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.variables');

goog.require('Blockly.Arduino');


/**
 * Code generator for variable (X) getter.
 * Arduino code: loop { X }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['variables_get'] = function (block) {
    var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['variables_init'] = function (block) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var varType = Blockly.Arduino.getArduinoType_(block.getVarType());

    Blockly.Arduino.addVariable(block.getFieldValue('VAR'),
        varType + ' ' + varName + ' = ' + argument0 + ';', true);
    var code = '';
    return code;
};

Blockly.Arduino['variables_declare'] = function (block) {
    var varName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var varType = Blockly.Arduino.getArduinoType_(block.getVarType());

    Blockly.Arduino.addVariable(block.getFieldValue('VAR'),
        varType + ' ' + varName + ';', true);
    var code = '';
    return code;
};

/**
 * Code generator for variable (X) setter (Y).
 * Arduino code: type X;
 *               loop { X = Y; }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['variables_set'] = function (block) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
};

/**
 * Code generator for variable (X) casting (Y).
 * Arduino code: loop { (Y)X }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['variables_set_type'] = function (block) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'VARIABLE_SETTYPE_INPUT',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var varType = Blockly.Arduino.getArduinoType_(
        Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
    var code = '(' + varType + ')(' + argument0 + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Value for defining a digital Pin state.
 * Arduino code: loop { HIGH / LOW }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_highlow'] = function (block) {
    var code = block.getFieldValue('STATE');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * Value for defining all Pins.
 * Arduino code: pin number
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_allpins'] = function (block) {
    var code = block.getFieldValue('PIN');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Value for defining PWM Pins.
 * Arduino code: pin number
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_pwmpins'] = function (block) {
    var code = block.getFieldValue('PIN');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Value for defining Analog Pins.
 * Arduino code: pin number
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_analogpins'] = function (block) {
    var code = block.getFieldValue('PIN');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};