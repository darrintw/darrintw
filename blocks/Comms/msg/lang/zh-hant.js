'use strict';

goog.require('Blockly.Msg.zh.hant');

goog.require('Blockly.Msg');

Blockly.Msg.BLOCKS_CATEGORY_COMMS = '序列埠';

//Serial
Blockly.Msg.ARD_SERIAL_BPS = "位元/秒";
Blockly.Msg.ARD_SERIAL_PRINT_MSG = "從序列埠 %1 送出 %2 訊息後 %3 換行";
Blockly.Msg.ARD_SERIAL_PRINT = "送出";
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = "換行";
Blockly.Msg.ARD_SERIAL_PRINT_TIP = "以文字形式送出資料到終端機/序列埠";
Blockly.Msg.ARD_SERIAL_PRINT_WARN = "要先設定 %1 後才能正確使用!";
Blockly.Msg.ARD_MATH_BIN = '二進位';
Blockly.Msg.ARD_MATH_DEC = '十進位';
Blockly.Msg.ARD_MATH_OCT = '八進制';
Blockly.Msg.ARD_MATH_HEX = '十六進位';
Blockly.Msg.ARD_SERIAL_PRINT_HEX_TOOLTIP = "以十六進位的格式列印指定的數位。";
Blockly.Msg.ARD_SERIAL_SETUP = "設定";
Blockly.Msg.ARD_SERIAL_SETUP_TIP = "選擇正確的速度";
Blockly.Msg.ARD_SERIAL_SPEED = "的序列通訊速度為";
Blockly.Msg.ARD_SERIAL_AVAILABLE_MSG = "序列埠 %1 有效資料?";
Blockly.Msg.ARD_SERIAL_AVAILABLE_TIP = "取得序列埠收到的字元數";
Blockly.Msg.ARD_SERIAL_READ_CHAR_MSG = "從序列埠 %1 讀取字元";
Blockly.Msg.ARD_SERIAL_READ_CHAR_TIP = "從序列埠讀取 1 個字元";
Blockly.Msg.ARD_SERIAL_READ_STRING_MSG = "從序列埠 %1 讀取字串";
Blockly.Msg.ARD_SERIAL_READ_STRING_TIP = "從序列埠讀取 1 個字串";

//Bluetooth
Blockly.Msg.ARD_SERIAL_BLUETOOTH = "藍芽";
Blockly.Msg.ARD_SERIAL_TX_PIN = "傳送腳位";
Blockly.Msg.ARD_SERIAL_RX_PIN = "接收腳位";
Blockly.Msg.ARD_SERIAL_BAUDRATE = "序列通訊速度";
Blockly.Msg.ARD_SERIAL_BLE_AVAILABLE_MSG = "藍芽有效資料?";
Blockly.Msg.ARD_SERIAL_BLE_READ_MSG = "從藍芽讀取字元";
Blockly.Msg.ARD_SERIAL_BLE_WRITE_MSG = "藍芽送出";
Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_MSG = "送出AT指令 ";
Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_AS = " 為 ";

//SoftwareSerial
Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_MSG = "設定軟體序列埠";
Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_TIP = "選取軟體序列埠的腳位與傳輸速度";
Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_MSG = "從軟體序列埠 %1 送出 %2 %3 換行";
Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_TIP = "以文字形式送出資料到終端機/序列埠";
Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_MSG = "軟體序列埠 %1 收到的字元數";
Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_TIP = "取得軟體序列埠收到的字元數";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_MSG = "從軟體序列埠 %1 讀取字元";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_TIP = "從軟體序列埠讀取 1 個字元";