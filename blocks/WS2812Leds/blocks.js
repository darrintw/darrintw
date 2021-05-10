/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.WS2812Leds');
goog.require('Blockly.Blocks');

Blockly.Blocks.WS2812Leds.HUE = 180;

Blockly.Blocks["pixel_init_var"] = {
    init: function () {
        this.appendValueInput("PIXEL_VAR")
            .appendField(Blockly.Msg.NEOPIXEL_SETUP);
        this.appendValueInput("PIXEL_NUM")
            .appendField(Blockly.Msg.NEOPIXEL_NUM);
        this.appendValueInput("PIXEL_PIN")
            .appendField(Blockly.Msg.NEOPIXEL_PIN);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.WS2812Leds.HUE);
        this.setTooltip(Blockly.Msg.NEOPIXEL_TOOLTIP);
        this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")
    }
};

Blockly.Blocks["pixel_single_color"] = {
    init: function () {
        this.appendValueInput("PIXEL_VAR")
            .appendField(Blockly.Msg.NEOPIXEL_STRIP);
        this.appendValueInput("PIXEL_NUMTH")
            .appendField(Blockly.Msg.NEOPIXEL_NUMTH_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_NUMTH_2)
            .appendField(Blockly.Msg.NEOPIXEL_RGB);
        this.appendValueInput("PIXEL_RED")
            .appendField(Blockly.Msg.NEOPIXEL_RED);
        this.appendValueInput("PIXEL_GREEN")
            .appendField(Blockly.Msg.NEOPIXEL_GREEN);
        this.appendValueInput("PIXEL_BLUE")
            .appendField(Blockly.Msg.NEOPIXEL_BLUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.WS2812Leds.HUE);
        this.setTooltip(Blockly.Msg.NEOPIXEL_TOOLTIP);
        this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")
    }
};

Blockly.Blocks["pixel_single_off"] = {
    init: function () {
        this.appendValueInput("PIXEL_VAR")
            .appendField(Blockly.Msg.NEOPIXEL_STRIP);
        this.appendValueInput("PIXEL_NUMTH")
            .appendField(Blockly.Msg.NEOPIXEL_NUMTH_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_NUMTH_2)
            .appendField(Blockly.Msg.NEOPIXEL_OFF);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.WS2812Leds.HUE);
        this.setTooltip(Blockly.Msg.NEOPIXEL_TOOLTIP);
        this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")
    }
};

Blockly.Blocks["pixel_all_off"] = {
    init: function () {
        this.appendValueInput("PIXEL_VAR")
            .appendField(Blockly.Msg.NEOPIXEL_STRIP);
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_ALLOFF);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.WS2812Leds.HUE);
        this.setTooltip(Blockly.Msg.NEOPIXEL_TOOLTIP);
        this.setHelpUrl("https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use")
    }
};