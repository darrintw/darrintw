/**
 * @license Licensed under the Apache License; Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileOverview  Ardublockly specific English strings.
 *
 * After modifying this file; either run "build.py" from the blockly directory;
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en;qqq;synonyms}.json.
 *
 * To convert all of the json files to .js files; run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

/**
 * Due to the frequency of long strings; the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors; adds
 * them to msg/json/qqq_ardublockly.json; and they show up in the translation
 * console.
 * Note the strings have to be surrounded by single quotation marks: ''
 */

/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Character';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Text';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_STRING = 'String';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Boolean';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Short Number';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Number';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Large Number';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Array';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Null';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Undefined';
/// Arduino Types - Place holder value; indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'ChildBlockMissing';

/**
 * Arduino blocks
 */
/// Arduino
Blockly.Msg.ARD_DEFINE = 'Define';
/// Arduino
Blockly.Msg.ARD_FUN_RUN_SETUP = 'Arduino run first:';
/// Arduino
Blockly.Msg.ARD_FUN_RUN_LOOP = 'Arduino loop forever:';
/// Arduino
Blockly.Msg.ARD_FUN_RUN_TIP = 'Defines the Arduino setup() and loop() functions.';
/// Arduino
Blockly.Msg.ARD_PIN_WARN1 = 'Pin %1 is needed for %2 as Pin %3. Already used as %4.';

/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'New instance...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';

/**
 * Ardublockly variable
 */
/// Arduino
Blockly.Msg.ARD_VAR_AS = 'as';
/// Arduino
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
/// Arduino
Blockly.Msg.VARIABLES_DECLARE = "Declare %1 to %2";
/// Arduino
Blockly.Msg.VARIABLES_DECLARE_TOOLTIP = "Declare global value";
/// Arduino
Blockly.Msg.VARIABLES_INIT = 'initialize %1 to %2';
/// Arduino
Blockly.Msg.VARIABLES_INIT_TOOLTIP = 'assign an initial value for a variable.';
/// Arduino
Blockly.Msg.VARIABLES_INIT_NOT_IN_SETUP_WARNING = 'Warning: This block may only be used within SETUP.';
/// Arduino
Blockly.Msg.VARIABLES_INIT_REDEFINED_WARNING = 'Warning: The variable %1 can not be redefined.';
/// Arduino
Blockly.Msg.VARIABLES_GET_ITEM = 'i';
/// Arduino
Blockly.Msg.VARIABLES_AS = 'variables as';
/// Arduino
Blockly.Msg.VARIABLES_TYPE_NUMBER = 'int';
/// Arduino
Blockly.Msg.VARIABLES_TYPE_STRING = 'String';
/// Arduino
Blockly.Msg.VARIABLES_TYPE_FLOAT = 'float';
/// Arduino
Blockly.Msg.VARIABLES_TYPE_ONOFF = 'Switch (boolean)';
/// Arduino
Blockly.Msg.VARIABLES_TYPE_CATEGORY = 'Category (String)';
/// Arduino
Blockly.Msg.VARIABLES_WARN_TEXT = 'The variable %1 has been first assigned to the %2 type and this block tries to assign the type %3!';
/**
 * Ardublockly Input Output
 */
/// Arduino
Blockly.Msg.ARD_PIN = 'Pin';
/// Arduino
Blockly.Msg.ARD_PWM_PIN = 'PWM Pin';
/// Arduino
Blockly.Msg.ARD_ANALOG_PIN = 'Analog Pin';
/// Arduino
Blockly.Msg.ARD_HIGH = 'HIGH';
/// Arduino
Blockly.Msg.ARD_LOW = 'LOW';
/// Arduino
Blockly.Msg.ARD_DIGITALWRITE_MSG = 'set digital %1 to %2';
/// Arduino
Blockly.Msg.ARD_ANALOGWRITE_MSG = 'set analog %1 to %2';
/// Arduino
Blockly.Msg.ARD_ANALOGWRITE = 'set analog Pin#';
/// Arduino
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Write analog value between 0 and 255 to a specific PWM Port';
/// Arduino
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a Pin state logic High or Low.';
/// Arduino
Blockly.Msg.ARD_WRITE_TO = 'to';
/// Arduino
Blockly.Msg.ARD_DIGITALWRITE = 'set digital Pin#';
/// Arduino
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Write digital value HIGH or LOW to a specific Port';
/// Arduino
Blockly.Msg.ARD_I2CREAD = "I2C Pin#";
/// Arduino
Blockly.Msg.ARD_I2CREAD_MSG = "SDA or SLC pin of I2C";
/// Arduino
Blockly.Msg.ARD_I2CREAD_TIP = "Select SDA or SLC pin of I2C";
/// Arduino
Blockly.Msg.ARD_SETTONE = 'Set tone on Pin #';
/// Arduino
Blockly.Msg.ARD_NOTONE = 'Turn off tone on Pin #';
/// Arduino
Blockly.Msg.ARD_TONEFREQ = 'at frequency';
/// Arduino
Blockly.Msg.ARD_TONE_FREQ = 'frequency';
/// Arduino
Blockly.Msg.ARD_TONE_PIN = 'Tone PIN#';
/// Arduino
Blockly.Msg.ARD_TONE_PIN_TIP = 'Generate audio tones on a Pin';
/// Arduino
Blockly.Msg.ARD_TONE_TIP = 'Sets tone on Pin to specified frequency within range 31 - 65535';
/// Arduino
Blockly.Msg.ARD_TONE_WARNING = 'Frequency must be in range 31 - 65535';
/// Arduino
Blockly.Msg.ARD_NOTONE_PIN = 'No tone PIN#';
/// Arduino
Blockly.Msg.ARD_NOTONE_PIN_TIP = 'Stop generating a tone on a Pin';
/// Arduino
Blockly.Msg.ARD_NOTONE_TIP = 'Turns the tone off on the selected Pin';
/// Arduino
Blockly.Msg.ARD_DIGITALREAD_MSG = 'read digital %1';
/// Arduino
Blockly.Msg.ARD_ANALOGREAD_MSG = 'read analog %1';
/// Arduino
Blockly.Msg.ARD_INPUT_PULLUP_MSG = 'enable internal pullup resister at Pin %1';
/// Arduino
Blockly.Msg.ARD_INPUT_PULLUP_TIP = 'enable internal pullup resister at specified Pin';
/// Arduino
Blockly.Msg.ARD_ANALOGREAD = 'read analog %1';
/// Arduino
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Return value between 0 and 1024';
/// Arduino
Blockly.Msg.ARD_DIGITALREAD = 'read digital Pin#';
/// Arduino
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Read digital value on a Pin: HIGH or LOW';
/// Arduino
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected Pin.';
/// Arduino
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on Pin #%2';
/// Arduino
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on Pin #%2 (timeout after %3 μs)';
/// Arduino
Blockly.Msg.ARD_PULSETIMEOUT_MSG = 'read %1 pulse on %2 timeout after %3 ms';
/// Arduino
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected Pin; if it is within the time-out in microseconds.'

/**
 * Ardublockly Text
 */
/// Arduino
Blockly.Msg.TEXT_CHAR_HELPURL = '';
/// Arduino
Blockly.Msg.TEXT_CHAR_TOOLTIP = '';
/// Arduino

/**
 * Ardublockly Time
 */
Blockly.Msg.ARD_TIME_DELAY = 'wait';
/// Arduino
Blockly.Msg.ARD_TIME_REPEAT = 'repeat';
/// Arduino
Blockly.Msg.ARD_TIME_S = 'seconds';
/// Arduino
Blockly.Msg.ARD_TIME_DELAY_MICROS = 'microseconds';
/// Arduino
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = 'Wait specific time in microseconds';
/// Arduino
Blockly.Msg.ARD_TIME_DELAY_TIP = 'Wait specific time in milliseconds';
/// Arduino
Blockly.Msg.ARD_TIME_INF = 'wait forever (end program)';
/// Arduino
Blockly.Msg.ARD_TIME_INF_TIP = 'Wait indefinitely; stopping the program.';
/// Arduino
Blockly.Msg.ARD_TIME_MICROS = 'current elapsed Time (microseconds)';
/// Arduino
Blockly.Msg.ARD_TIME_MICROS_TIP = 'Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
/// Arduino
Blockly.Msg.ARD_TIME_MILLIS = 'current elapsed Time (milliseconds)';
/// Arduino
Blockly.Msg.ARD_TIME_MILLIS_TIP = 'Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
/// Arduino
Blockly.Msg.ARD_TIME_MS = 'milliseconds';
/// Arduino
Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = 'empty!';

/**
 * Ardublockly Array
 */
/// Arduino
Blockly.Msg.ARRAY_TAB_CREATE = 'create element block for array %1';
/// Arduino
Blockly.Msg.ARRAY_TAB_CREATE_FIX = 'create block "set element in array %1 to"';
/// Arduino
Blockly.Msg.ARRAY_SET_WITH = 'set with';
/// Arduino
Blockly.Msg.ARRAY_TAILLE = 'size';
/// Arduino
Blockly.Msg.ARRAY_CONTENU = 'contain';
/// Arduino
Blockly.Msg.ARRAY_DIM = 'size of ';
/// Arduino
Blockly.Msg.ARRAY_INDEX = 'index';
/// Arduino
Blockly.Msg._AT = 'to';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH = 'created with';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = 'array';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = 'Add; remove; or reorder sections to reconfigure this array block.';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH_HELPURL = '';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = 'an array';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = 'item';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the array.';
/// Arduino
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = 'Create a array with any number of items.';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_AT = 'get index';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_AT1 = 'get index';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_AT2 = 'index';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_HELPURL = '';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_ITEM = 'in Array';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP = '';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1 = 'returns the value stored in the list or table';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2 = 'created a list or table of the selected type';
/// Arduino
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3 = 'sets one(or more) item(s) in the list or array to the specified value(s)';
/// Arduino
Blockly.Msg.ARRAY_CREATE = 'define ';
/// Arduino
Blockly.Msg.ARRAY_CONTIENT = 'with';
/// Arduino
Blockly.Msg.ARRAY_LIST = 'list';
/// Arduino
Blockly.Msg.ARRAY_ARRAY = 'array';
/// Arduino
Blockly.Msg.ARRAY_fixe = 'change element at position';
/// Arduino
Blockly.Msg.ARRAY_DECLARE_NAME = 'create array';
/// Arduino
Blockly.Msg.ARRAY_DECLARE_TYPE = 'type';
/// Arduino
Blockly.Msg.ARRAY_DECLARE_SIZE = 'number of elements';
/// Arduino
Blockly.Msg.ARRAY_DECLARE_TOOLTIP = 'create an array of specific type and number of elements';
/// Arduino
Blockly.Msg.ARRAY_MODIFY_INDICE = 'set element nb';
/// Arduino
Blockly.Msg.ARRAY_MODIFY_NAME = 'in array';
/// Arduino
Blockly.Msg.ARRAY_MODIFY_VALUE = 'value';
/// Arduino
Blockly.Msg.ARRAY_MODIFY_TOOLTIP = 'set a specific value to an element of an array';
