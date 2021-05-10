/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.pixetto');

goog.require('Blockly.Blocks');

Blockly.Blocks.pixetto.HUE = 120;

var funclist;
var colorlist;
var shaphelist;
var signlist;
/*
var funclist = [
    [Blockly.Msg.PIXETTO_FCD, 'FUNC_COLOR_DETECTION'],
    [Blockly.Msg.PIXETTO_FCCD, 'FUNC_COLOR_CODE_DETECTION'],
    [Blockly.Msg.PIXETTO_FSD, 'FUNC_SHAPE_DETECTION'],
    [Blockly.Msg.PIXETTO_FSPD, 'FUNC_SPHERE_DETECTION'],
    [Blockly.Msg.PIXETTO_FTM, 'FUNC_TEMPLATE_MATCHING'],
    [Blockly.Msg.PIXETTO_FK, 'FUNC_KEYPOINTS'],
    [Blockly.Msg.PIXETTO_FNN, 'FUNC_NEURAL_NETWORK'],
    [Blockly.Msg.PIXETTO_FFD, 'FUNC_FACE_DETECTION'],
    [Blockly.Msg.PIXETTO_FTSD, 'FUNC_TRAFFIC_SIGN_DETECTION'],
    [Blockly.Msg.PIXETTO_FHDD, 'FUNC_HANDWRITTEN_DIGITS_DETECTION'],
    [Blockly.Msg.PIXETTO_FHLD, 'FUNC_HANDWRITTEN_LETTERS_DETECTION']];

var colorlist = [[Blockly.Msg.PIXETTO_CRED, 'COLOR_RED'],
    [Blockly.Msg.PIXETTO_CYELLOW, 'COLOR_YELLOW'],
    [Blockly.Msg.PIXETTO_CGREEN, 'COLOR_GREEN'],
    [Blockly.Msg.PIXETTO_CBLUE, 'COLOR_BLUE'],
    [Blockly.Msg.PIXETTO_CPURPLE, 'COLOR_PURPLE'],
    [Blockly.Msg.PIXETTO_CBLACK, 'COLOR_BLACK']];

var shaphelist = [
    [Blockly.Msg.PIXETTO_SHAPE_ROUND, 'SHAPE_ROUND'],
    [Blockly.Msg.PIXETTO_SHAPE_RECTANGLE, 'SHAPE_RECTANGLE'],
    [Blockly.Msg.PIXETTO_SHAPE_TRIANGLE, 'SHAPE_TRIANGLE'],
    [Blockly.Msg.PIXETTO_SHAPE_PENTAGON, 'SHAPE_PENTAGON']];

var signlist = [
    [Blockly.Msg.PIXETTO_SIGN_NE, 'SIGN_NO_ENTRE'],
    [Blockly.Msg.PIXETTO_SIGN_NLT, 'SIGN_NO_LEFT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_NRT, 'SIGN_NO_RIGHT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_WW, 'SIGN_WRONG_WAY'],
    [Blockly.Msg.PIXETTO_SIGN_NUT, 'SIGN_NO_U_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_MAXS, 'SIGN_MAX_SPEED'],
    [Blockly.Msg.PIXETTO_SIGN_OWT, 'SIGN_ONEWAY_TRAFFIC'],
    [Blockly.Msg.PIXETTO_SIGN_LT, 'SIGN_LEFT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_RT, 'SIGN_RIGHT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_MINS, 'SIGN_MIN_SPEED'],
    [Blockly.Msg.PIXETTO_SIGN_UT, 'SIGN_U_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_TA, 'SIGN_TUNNEL_AHEAD'],
    [Blockly.Msg.PIXETTO_SIGN_BOC, 'SIGN_BEWARE_OF_CHILDREN'],
    [Blockly.Msg.PIXETTO_SIGN_RA, 'SIGN_ROUNDABOUT'],
    [Blockly.Msg.PIXETTO_SIGN_YTP, 'SIGN_YIELD_TO_PEDESTRIAN'],
    [Blockly.Msg.PIXETTO_SIGN_REDL, 'SIGN_RED_LIGHT'],
    [Blockly.Msg.PIXETTO_SIGN_GREENL, 'SIGN_GREEN_LIGHT']];
*/
/*
var signImglist = [
    [{
        'src': '/blocks/Pixetto/img/NO_ENTER.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NE
    }, 'SIGN_NO_ENTRE'],
    [{
        'src': '/blocks/Pixetto/img/NO_LEFT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NLT
    }, 'SIGN_NO_LEFT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/NO_RIGHT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NRT
    }, 'SIGN_NO_RIGHT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/WRONG_WAY.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_WW
    }, 'SIGN_WRONG_WAY'],
    [{
        'src': '/blocks/Pixetto/img/NO_U_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NUT
    }, 'SIGN_NO_U_TURN'],
    [{
        'src': '/blocks/Pixetto/img/MAX_SPEED.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_MAXS
    }, 'SIGN_MAX_SPEED'],
    [{
        'src': '/blocks/Pixetto/img/ONEWAY_TRAFFIC.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_OWT
    }, 'SIGN_ONEWAY_TRAFFIC'],
    [{
        'src': '/blocks/Pixetto/img/LEFT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_LT
    }, 'SIGN_LEFT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/RIGHT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_RT
    }, 'SIGN_RIGHT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/MIN_SPEED.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_MINS
    }, 'SIGN_MIN_SPEED'],
    [{
        'src': '/blocks/Pixetto/img/U_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_UT
    }, 'SIGN_U_TURN'],
    [{
        'src': '/blocks/Pixetto/img/TUNNEL_AHEAD.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_TA
    }, 'SIGN_TUNNEL_AHEAD'],
    [{
        'src': '/blocks/Pixetto/img/BEWARE_OF_CHILDREN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_BOC
    }, 'SIGN_BEWARE_OF_CHILDREN'],
    [{
        'src': '/blocks/Pixetto/img/ROUNDABOUT.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_RA
    }, 'SIGN_ROUNDABOUT'],
    [{
        'src': '/blocks/Pixetto/img/YIELD_TO_PEDESTRIAN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_YTP
    }, 'SIGN_YIELD_TO_PEDESTRIAN'],
    [{
        'src': '/blocks/Pixetto/img/RED_LIGHT.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_REDL
    }, 'SIGN_RED_LIGHT'],
    [{
        'src': '/blocks/Pixetto/img/GREEN_LIGHT.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_GREENL
    }, 'SIGN_GREEN_LIGHT']];
*/
/*
var funclist = [
    ['COLOR_DETECTION', 'FUNC_COLOR_DETECTION'],
    ['COLOR_CODE_DETECTION', 'FUNC_COLOR_CODE_DETECTION'],
    ['SHAPE_DETECTION', 'FUNC_SHAPE_DETECTION'],
    ['SPHERE_DETECTION', 'FUNC_SPHERE_DETECTION'],
    ['TEMPLATE_MATCHING', 'FUNC_TEMPLATE_MATCHING'],
    ['KEYPOINTS', 'FUNC_KEYPOINTS'],
    ['NEURAL_NETWORK', 'FUNC_NEURAL_NETWORK'],
    ['FACE_DETECTION', 'FUNC_FACE_DETECTION'],
    ['TRAFFIC_SIGN_DETECTION', 'FUNC_TRAFFIC_SIGN_DETECTION'],
    ['HANDWRITTEN_DIGITS_DETECTION', 'FUNC_HANDWRITTEN_DIGITS_DETECTION'],
    ['HANDWRITTEN_LETTERS_DETECTION', 'FUNC_HANDWRITTEN_LETTERS_DETECTION']];

var colorlist = [
    ['RED', 'COLOR_RED'],
    ['YELLOW', 'COLOR_YELLOW'],
    ['GREEN', 'COLOR_GREEN'],
    ['BLUE', 'COLOR_BLUE'],
    ['PURPLE', 'COLOR_PURPLE'],
    ['BLACK', 'COLOR_BLACK']];

var shaphelist = [
    ['ROUND', 'SHAPE_ROUND'],
    ['RECTANGLE', 'SHAPE_RECTANGLE'],
    ['TRIANGLE', 'SHAPE_TRIANGLE'],
    ['PENTAGON', 'SHAPE_PENTAGON']];

var signlist = [
    ['NO_ENTER', 'SIGN_NO_ENTER'],
    ['NO_LEFT_TURN', 'SIGN_NO_LEFT_TURN'],
    ['NO_RIGHT_TURN', 'SIGN_NO_RIGHT_TURN'],
    ['WRONG_WAY', 'SIGN_WRONG_WAY'],
    ['NO_U_TURN', 'SIGN_NO_U_TURN'],
    ['MAX_SPEED', 'SIGN_MAX_SPEED'],
    ['ONEWAY_TRAFFIC', 'SIGN_ONEWAY_TRAFFIC'],
    ['LEFT_TURN', 'SIGN_LEFT_TURN'],
    ['RIGHT_TURN', 'SIGN_RIGHT_TURN'],
    ['MIN_SPEED', 'SIGN_MIN_SPEED'],
    ['U_TURN', 'SIGN_U_TURN'],
    ['TUNNEL_AHEAD', 'SIGN_TUNNEL_AHEAD'],
    ['BEWARE_OF_CHILDREN', 'SIGN_BEWARE_OF_CHILDREN'],
    ['ROUNDABOUT', 'SIGN_ROUNDABOUT'],
    ['YIELD_TO_PEDESTRIAN', 'SIGN_YIELD_TO_PEDESTRIAN'],
    ['RED_LIGHT', 'SIGN_RED_LIGHT'],
    ['GREEN_LIGHT', 'SIGN_GREEN_LIGHT']];
*/

var numlist = [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'],
    ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9']];

var latterlist = [['Aa', 'LETTER_A'], ['Bb', 'LETTER_B'], ['Cc', 'LETTER_C'], ['Dd', 'LETTER_D'],
    ['Ee', 'LETTER_E'], ['Ff', 'LETTER_F'], ['Gg', 'LETTER_G'], ['Hh', 'LETTER_H'],
    ['Ii', 'LETTER_I'], ['Jj', 'LETTER_J'], ['Kk', 'LETTER_K'], ['Ll', 'LETTER_L'],
    ['Mm', 'LETTER_M'], ['Nn', 'LETTER_N'], ['Oo', 'LETTER_O'], ['Pp', 'LETTER_P'],
    ['Qq', 'LETTER_Q'], ['Rr', 'LETTER_R'], ['Ss', 'LETTER_S'], ['Tt', 'LETTER_T'],
    ['Uu', 'LETTER_U'], ['Vv', 'LETTER_V'], ['Ww', 'LETTER_W'], ['Xx', 'LETTER_X'],
    ['Yy', 'LETTER_Y'], ['Zz', 'LETTER_Z']];

Blockly.Blocks['pixetto_setup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_INITIAL);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.PIXETTO_RX)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIXETTO_RX");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.PIXETTO_TX)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIXETTO_TX");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_detected'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_DETECTED);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['pixetto_getfuncid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_FUNC_ID);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_gettypeid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_TYPE_ID);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getposx'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_POS_X);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getposy'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_POS_Y);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getwidth'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_WIDTH);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getheigth'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_HEIGHT);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_function'] = {
    init: function () {
        funclist = [
            [Blockly.Msg.PIXETTO_FCD, 'FUNC_COLOR_DETECTION'],
            [Blockly.Msg.PIXETTO_FCCD, 'FUNC_COLOR_CODE_DETECTION'],
            [Blockly.Msg.PIXETTO_FSD, 'FUNC_SHAPE_DETECTION'],
            [Blockly.Msg.PIXETTO_FSPD, 'FUNC_SPHERE_DETECTION'],
            [Blockly.Msg.PIXETTO_FTM, 'FUNC_TEMPLATE_MATCHING'],
            [Blockly.Msg.PIXETTO_FK, 'FUNC_KEYPOINTS'],
            [Blockly.Msg.PIXETTO_FNN, 'FUNC_NEURAL_NETWORK'],
            [Blockly.Msg.PIXETTO_FFD, 'FUNC_FACE_DETECTION'],
            [Blockly.Msg.PIXETTO_FTSD, 'FUNC_TRAFFIC_SIGN_DETECTION'],
            [Blockly.Msg.PIXETTO_FHDD, 'FUNC_HANDWRITTEN_DIGITS_DETECTION'],
            [Blockly.Msg.PIXETTO_FHLD, 'FUNC_HANDWRITTEN_LETTERS_DETECTION']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_FUNC)
                .appendField(new Blockly.FieldDropdown(funclist), "PIXETTO_FUNC_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_color'] = {
    init: function () {
        colorlist = [
            [Blockly.Msg.PIXETTO_CRED, 'COLOR_RED'],
            [Blockly.Msg.PIXETTO_CYELLOW, 'COLOR_YELLOW'],
            [Blockly.Msg.PIXETTO_CGREEN, 'COLOR_GREEN'],
            [Blockly.Msg.PIXETTO_CBLUE, 'COLOR_BLUE'],
            [Blockly.Msg.PIXETTO_CPURPLE, 'COLOR_PURPLE'],
            [Blockly.Msg.PIXETTO_CBLACK, 'COLOR_BLACK']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_COLOR)
                .appendField(new Blockly.FieldDropdown(colorlist), "PIXETTO_COLOR_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_shape'] = {
    init: function () {
        shaphelist = [
            [Blockly.Msg.PIXETTO_SHAPE_ROUND, 'SHAPE_ROUND'],
            [Blockly.Msg.PIXETTO_SHAPE_RECTANGLE, 'SHAPE_RECTANGLE'],
            [Blockly.Msg.PIXETTO_SHAPE_TRIANGLE, 'SHAPE_TRIANGLE'],
            [Blockly.Msg.PIXETTO_SHAPE_PENTAGON, 'SHAPE_PENTAGON']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_SHAPE)
                .appendField(new Blockly.FieldDropdown(shaphelist), "PIXETTO_SHAPE_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_sign'] = {
    init: function () {
        signlist = [
            [Blockly.Msg.PIXETTO_SIGN_NE, 'SIGN_NO_ENTRE'],
            [Blockly.Msg.PIXETTO_SIGN_NLT, 'SIGN_NO_LEFT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_NRT, 'SIGN_NO_RIGHT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_WW, 'SIGN_WRONG_WAY'],
            [Blockly.Msg.PIXETTO_SIGN_NUT, 'SIGN_NO_U_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_MAXS, 'SIGN_MAX_SPEED'],
            [Blockly.Msg.PIXETTO_SIGN_OWT, 'SIGN_ONEWAY_TRAFFIC'],
            [Blockly.Msg.PIXETTO_SIGN_LT, 'SIGN_LEFT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_RT, 'SIGN_RIGHT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_MINS, 'SIGN_MIN_SPEED'],
            [Blockly.Msg.PIXETTO_SIGN_UT, 'SIGN_U_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_TA, 'SIGN_TUNNEL_AHEAD'],
            [Blockly.Msg.PIXETTO_SIGN_BOC, 'SIGN_BEWARE_OF_CHILDREN'],
            [Blockly.Msg.PIXETTO_SIGN_RA, 'SIGN_ROUNDABOUT'],
            [Blockly.Msg.PIXETTO_SIGN_YTP, 'SIGN_YIELD_TO_PEDESTRIAN'],
            [Blockly.Msg.PIXETTO_SIGN_REDL, 'SIGN_RED_LIGHT'],
            [Blockly.Msg.PIXETTO_SIGN_GREENL, 'SIGN_GREEN_LIGHT']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_SIGN)
                .appendField(new Blockly.FieldDropdown(signlist), "PIXETTO_SIGN_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_inputnum'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber("0"), "PIXETTO_INNUM");
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['pixetto_num'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(numlist), "PIXETTO_NUM_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_latter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(latterlist), "PIXETTO_LATTER_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};