'use strict';

goog.require('Blockly.Msg.en');

goog.require('Blockly.Msg');
/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_I2CLCD = "I2C LCD Display";

/// Ardublockly name
Blockly.Msg.ARD_I2CLCD_SCAN = "Scan I2C LCD address";
Blockly.Msg.ARD_I2CLCD_SETUP_MSG1 = "enable LCD at address ";
Blockly.Msg.ARD_I2CLCD_SETUP_MSG2 = "";
Blockly.Msg.ARD_I2CLCD_SETUP_TIP = "enable I2C interface LCD. Make sure the I2C address is correct.";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG1 = "print ";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG2 = " on row ";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG3 = " of LCD";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_TIP = "print text on specified line (only alphanumeric, original text would be cleared first)";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG1 = "move the LCD cursor to the ";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG2 = " column of the";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG3 = " row";
Blockly.Msg.ARD_I2CLCD_MOVE_TIP = "move cursor to specified position";
Blockly.Msg.ARD_I2CLCD_CLEAR_MSG = "clear LCD and reset the cursor back to the upper left corner";
Blockly.Msg.ARD_I2CLCD_CLEAR_TIP = "clear LCD and reset the cursor back to the upper left corner";
Blockly.Msg.ARD_I2CLCD_PRINT_MSG1 = "print text ";
Blockly.Msg.ARD_I2CLCD_PRINT_MSG2 = "at the current position of the cursor";
Blockly.Msg.ARD_I2CLCD_PRINT_TIP = "print text on specified position (only alphanumeric, original text would be cleared first)";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_MSG = "turn on LCD backlight";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_TIP = "Turn on LCD backlight";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_MSG = "turn off LCD backlight";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_TIP = "Turn off LCD backlight";
