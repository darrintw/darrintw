/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.sensor');

goog.require('Blockly.Blocks');

goog.require('Blockly.Types');

Blockly.Blocks.sensor.HUE = 120;

Blockly.Blocks['ultrasonic_distance'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage("../blocks/Sensor/img/hcsr04.png", 60, 60, "*"))
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE_SETUP);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TRIG)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TRIG_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE_ECHO)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "ECHO_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARD_ULTRASONIC_DISTANCE_CM, "cm"],
                    [Blockly.Msg.ARD_ULTRASONIC_DISTANCE_INCH, "inch"]]),
                "DISTANCE_UNIT");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("https://www.itead.cc/wiki/Ultrasonic_Ranging_Module_HC-SR04");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['tcrt5000'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_TRTC5000_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "ANALOG_PIN")
            .appendField(Blockly.Msg.ARD_TRTC5000_READ);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_TRTC5000_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['tcrt5000_var'] = {
    init: function () {
        this.appendValueInput("ANALOG_PIN")
            .appendField(Blockly.Msg.ARD_TRTC5000_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_TRTC5000_READ);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_TRTC5000_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['DHT11_readTemp'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READTEMP_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DHT11_readTemp_var'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READTEMP_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DHT11_readHumi'] = {
    /**
     * Block for DHT11 read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READHUMI_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DHT11_readHumi_var'] = {
    /**
     * Block for DHT11 read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READHUMI_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DS18B20_readTemp'] = {
    /**
     * Block for DS18B20 read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DS18B20_READTEMP_TIP);
        this.setHelpUrl("https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DS18B20_readTemp_var'] = {
    /**
     * Block for DS18B20 read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DS18B20_READTEMP_TIP);
        this.setHelpUrl("https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['photocells_read'] = {
    /**
     * Block for photocells read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP);
        this.setHelpUrl("https://learn.adafruit.com/photocells/arduino-code");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['photocells_read_var'] = {
    /**
     * Block for photocells read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP);
        this.setHelpUrl("https://learn.adafruit.com/photocells/arduino-code");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['lm35_read'] = {
    /**
     * Block for LM35 read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_LM35_READTEMP_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['lm35_read_var'] = {
    /**
     * Block for LM35 read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_LM35_READTEMP_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['irrecv_setup'] = {
    /**
     * Block for IR Reciver setup analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_SETUP)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_SETUP_TIP);
        this.setHelpUrl('');
    },
};

Blockly.Blocks['irrecv_setup_var'] = {
    /**
     * Block for IR Reciver setup analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_SETUP);
        this.appendValueInput("DATAPIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_SETUP_TIP);
        this.setHelpUrl(Blockly.Msg.ARD_IRRECV_SETUP_TIP);
    },
};

Blockly.Blocks['irrecv_available'] = {
    /**
     * Block for IR Reciver read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_IR)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['irrecv_available_var'] = {
    /**
     * Block for IR Reciver read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_IR);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['irrecv_read'] = {
    /**
     * Block for IR Reciver read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_READ_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_READ_MSG);
        this.setOutput(true, 'Large Number');
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_READ_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.LARGE_NUMBER;
    }
};

Blockly.Blocks['irrecv_read_var'] = {
    /**
     * Block for IR Reciver read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_READ_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_READ_MSG);
        this.setOutput(true, 'Large Number');
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_READ_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.LARGE_NUMBER;
    }
};

Blockly.Blocks['irrecv_resume'] = {
    /**
     * Block for IR Reciver read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_MSG);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_RESUME_TIP);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['irrecv_resume_var'] = {
    /**
     * Block for IR Reciver read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_MSG);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_RESUME_TIP);
        this.setHelpUrl("");
    }
};