'use strict';

goog.require('Blockly.Msg.zh.hant');

goog.require('Blockly.Msg');

/// Toolbox category name
Blockly.Msg.BLOCKS_SERVO_CATEGORY = "伺服馬達";

/// Servo
Blockly.Msg.ARD_SERVO_VAR = "伺服馬達變數";
Blockly.Msg.ARD_SERVO_ATTACH = "連接伺服馬達";
Blockly.Msg.ARD_SERVO_PIN = "腳位";
Blockly.Msg.ARD_SERVO_ATTACH_TIP = "指定伺服馬達名稱與腳位";
Blockly.Msg.ARD_SERVO_WRITE = "伺服馬達";
Blockly.Msg.ARD_SERVO_WRITE_TO = "旋轉到";
Blockly.Msg.ARD_SERVO_WRITE_DEG = "度";
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = "角度 (0~180)";
Blockly.Msg.ARD_SERVO_DELAY = "每度延遲";
Blockly.Msg.ARD_SERVO_SECOND = "毫秒";
Blockly.Msg.ARD_SERVO_WRITE_TIP = "設定伺服馬達旋轉到指定角度";
Blockly.Msg.ARD_SERVO_READ = "讀取伺服馬達角度";
Blockly.Msg.ARD_SERVO_READ_TIP = "讀取伺服馬達目前的角度";
Blockly.Msg.ARD_SERVO_ATTACH = "設定伺服馬達腳位";
Blockly.Msg.ARD_SERVO_DETACH = "離線伺服馬達";
Blockly.Msg.ARD_SERVO_DETACH_TIP = "離線伺服馬達確保PWM的8、9腳位可以正常運作";

/// AFMorot
Blockly.Msg.ARD_AFMOROT = "L293D";
Blockly.Msg.ARD_AFMOROT_CONTROL = "指令";
Blockly.Msg.ARD_AFMOROT_FORWARD = "正轉";
Blockly.Msg.ARD_AFMOROT_BACKWARD = "反轉";
Blockly.Msg.ARD_AFMOROT_RELEASE = "停止";
Blockly.Msg.ARD_AFMOROT_CHANNEL = "頻道";
Blockly.Msg.ARD_AFMOTOR_SPEED = "速度";
Blockly.Msg.ARD_AFMOTOR_TIP = "";

/// Stepper
Blockly.Msg.ARD_STEPPER = '步進馬達';
Blockly.Msg.ARD_STEPPER_SETUP_4PIN = "初始化步進馬達";
Blockly.Msg.ARD_STEPPER_PIN1 = "腳位1#";
Blockly.Msg.ARD_STEPPER_PIN2 = "腳位2#";
Blockly.Msg.ARD_STEPPER_PIN3 = "腳位3#";
Blockly.Msg.ARD_STEPPER_PIN4 = "腳位4#";
Blockly.Msg.ARD_STEPPPE_RREVOLUTION = '每轉步數';
Blockly.Msg.ARD_STEPPER_SET_SPEED = '設置轉速';
Blockly.Msg.ARD_STEPPER_STEP = '遞增量';
Blockly.Msg.ARD_TOOLTIP_STEPPER_2PIN = '用於初始化兩腳位步進馬達';
Blockly.Msg.ARD_TOOLTIP_STEPPER_4PIN = '用於初始化四腳位步進馬達';
Blockly.Msg.ARD_TOOLTIP_STEPPER_MOVE = '設置步進馬達的遞增量';