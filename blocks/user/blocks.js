/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.user');

goog.require('Blockly.Blocks');

Blockly.Blocks.user.HUE = 180;

/* User define block */
Blockly.Blocks['user_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.user.HUE);
  }
};
