/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview English strings for test blocks. All names have the postfix
 *     BLOCKS_{category} from the blocks_config.json data.
 */
'use strict';

goog.require('Blockly.Msg.en');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */
// LinkIt
Blockly.Msg.BLOCKS_CATEGORY_LINKIT = "LinkIt";
// Wi-Fi
Blockly.Msg.CATEGORY_LINKIT_WIFI = "Wi-Fi";
Blockly.Msg.CATEGORY_LINKIT_WIFI_DISCONNECT = "Disconnect Wi-Fi";
Blockly.Msg.CATEGORY_LINKIT_WIFI_GETIP = "Get Wi-Fi IP Address";
Blockly.Msg.CATEGORY_LINKIT_WIFI_ADVANCED = "Wi-Fi (Advanced)";
Blockly.Msg.LINKIT_SET_WIFI_HELPURL = "";
Blockly.Msg.LINKIT_SET_WIFI_TITLE = "Wi-Fi Setup";
Blockly.Msg.LINKIT_SET_WIFI_SSID = "Wi-Fi ID";
Blockly.Msg.LINKIT_SET_WIFI_PASSWORD = "Wi-Fi Password";
Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP = "";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SHIELD = "No Wi-Fi Sheld";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_IDLE = "Idle";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SSID_AVAIL = "No SSID Available";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_SCAN_COMPLETED = "Scan Completed";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTED = "Connected";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECT_FAILED = "Connect Failed";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTION_LOST = "Connection Lost";
Blockly.Msg.LINKIT_SET_WIFI_STATUS_DISCONNECTED = "Disconnected";
Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE = "Wi-Fi Connected";
Blockly.Msg.LINKIT_SET_WIFI_UNTIL_READY_TITLE = "Connect to Wi-Fi AP";
// MCS
Blockly.Msg.LINKIT_SET_MCS_HELPURL = "";
Blockly.Msg.LINKIT_SET_MCS_TOOLTIP = "";
Blockly.Msg.LINKIT_SET_MCS_WIFI = "Connect to MCS";
Blockly.Msg.LINKIT_SET_MCS_DEVICEID = "DeviceID";
Blockly.Msg.LINKIT_SET_MCS_DEVICEKEY = "DeviceKey";
Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE = "Add MCS ";
Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TAIL = "controller channel";
Blockly.Msg.LINKIT_SET_MCS_CHANNEL2_TAIL = "display channel";
Blockly.Msg.LINKIT_CHECK_MCS_CONNECTED_TITLE = "MCS Connected";
Blockly.Msg.LINKIT_CHECK_MCS_RECONNECT_TITLE = "MCS Reconnect";
Blockly.Msg.LINKIT_CHECK_MCS_LED_VALID_TITLE = "controller channel valid";
Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TITLE = "Get";
Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TAIL = "controller channel value";
Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TITLE = "Set";
Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TAIL = "display channel value to";
Blockly.Msg.LINKIT_MCS_WAIT_UNTIL_CONNECTED_TITLE = "Connecting to MCS..";
Blockly.Msg.LINKIT_MCS_LED_WAIT_UNTIL_READ_VALUE_TITLE = "Waiting for controller channel...";
Blockly.Msg.LINKIT_ADD_MCS_CHANNEL_TITLE = "Adding channel";
Blockly.Msg.LINKIT_MCS_CHANNEL = "Channel";
Blockly.Msg.LINKIT_MCS_PROCESS_TITLE = "Synchronize with MCS";
Blockly.Msg.CATEGORY_LINKIT_MCS = "MCS";
Blockly.Msg.LINKIT_MCS_LED_UPDATED = "controller channel updated";
// MCSLite
Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL = "";
Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP = "";
Blockly.Msg.LINKIT_SET_MCSLITE_WIFI = "Connect to MCSLite";
Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEID = "DeviceID";
Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEKEY = "DeviceKey";
Blockly.Msg.LINKIT_SET_MCSLITE_SERV = "IP Address";
Blockly.Msg.LINKIT_SET_MCSLITE_PORT = "Port";
Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL1_TITLE = "Add MCS ";
Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL1_TAIL = "controller channel";
Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL2_TAIL = "display channel";
Blockly.Msg.LINKIT_CHECK_MCSLITE_CONNECTED_TITLE = "MCS Connected";
Blockly.Msg.LINKIT_CHECK_MCSLITE_RECONNECT_TITLE = "MCS Reconnect";
Blockly.Msg.LINKIT_CHECK_MCSLITE_LED_VALID_TITLE = "controller channel valid";
Blockly.Msg.LINKIT_CHECK_MCSLITE_LED_VALUE_TITLE = "Get MCS ";
Blockly.Msg.LINKIT_CHECK_MCSLITE_LED_VALUE_TAIL = "controller channel value";
Blockly.Msg.LINKIT_CHECK_MCSLITE_REMOTE_VALUE_TITLE = "Set MCS";
Blockly.Msg.LINKIT_CHECK_MCSLITE_REMOTE_VALUE_TAIL = "display channel value";
Blockly.Msg.LINKIT_MCSLITE_WAIT_UNTIL_CONNECTED_TITLE = "Connecting to MCS..";
Blockly.Msg.LINKIT_MCSLITE_LED_WAIT_UNTIL_READ_VALUE_TITLE = "Waiting for controller channel...";
Blockly.Msg.LINKIT_ADD_MCSLITE_CHANNEL_TITLE = "Adding channel";
Blockly.Msg.LINKIT_MCSLITE_CHANNEL = "Channel";
Blockly.Msg.LINKIT_MCSLITE_PROCESS_TITLE = "Synchronize with MCS";
Blockly.Msg.CATEGORY_LINKIT_MCSLITE = "MCS";
Blockly.Msg.LINKIT_MCSLITE_LED_UPDATED = "controller channel updated";
// BLE
Blockly.Msg.CATEGORY_LINKIT_BLE = "BLE";
Blockly.Msg.LINKIT_SET_BLE_HELPURL = "https://docs.labs.mediatek.com/resource/linkit7697-arduino/en/using-bluetooth";
Blockly.Msg.LINKIT_SET_BLE_TOOLTIP = "";
Blockly.Msg.LINKIT_SET_BLE_GET_ADDRESS_TITLE = "Get BLE Device Address";
Blockly.Msg.LINKIT_SET_BLE_READY_TITLE = "BLE ready()";
Blockly.Msg.LINKIT_SET_BLE_UNTIL_READY_TITLE = "Wait Until BLE is ready()";
Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL = "https://docs.labs.mediatek.com/resource/linkit7697-arduino/en/using-bluetooth#UsingBluetooth-UsingLinkIt7697asaCentralDevice";
Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TITLE = "Scan for BLE devices";
Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP = "";
Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_COUNT = "Number of found BLE peripherals";
Blockly.Msg.LINKIT_SET_BLE_CENTRAL_GET_PERIPHERAL_WITH_INDEX = "Name of # %1 BLE peripheral in index";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL = "https://docs.labs.mediatek.com/resource/linkit7697-arduino/en/using-bluetooth#UsingBluetooth-UsingLinkIt7697asaSimpleBLEPeripheral";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TITLE = "Create BLE Peripheral";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_NAME = "Display Name";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SERVICE = "Service UUID";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SEC = "UUID";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC = "Add Characteristic";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TYPE = "Type";
Blockly.Msg.LINKIT_SET_LBLE_ATTRIBUTE = "Attribute";
Blockly.Msg.LINKIT_SET_LBLE_READ_WRITE = "Read & Write";
Blockly.Msg.LINKIT_SET_LBLE_READ = "Read";
Blockly.Msg.LINKIT_SET_LBLE_WRITE = "Write";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP = "";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_WRITE = "Write in ";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE = "Characteristic ";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL = " getValue";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN = "Characteristic ";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN_TAIL = " isWritten";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY = "EddyStoneURL";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_URL = "URL???includes protocol, non-protocol part must < 18 chars)";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY_URL_INVALID = "Invalid Eddy Stone URL. Correct form should be either http://domain.com or https://domain.com.";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTP = "http://";
Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTPS = "https://";
// BLE Beacon
Blockly.Msg.CATEGORY_LINKIT_BLE_BEACON = "BLE Beacon";
Blockly.Msg.LINKIT_SET_IBEACON_HELPURL = "https://docs.labs.mediatek.com/resource/linkit7697-arduino/en/using-bluetooth#UsingBluetooth-UsingLinkIt7697asaniBeacon";
Blockly.Msg.LINKIT_SET_IBEACON_TITLE = "iBeacon";
Blockly.Msg.LINKIT_SET_IBEACON_UUID = "UUID";
Blockly.Msg.LINKIT_SET_IBEACON_MAJOR = "Major ID";
Blockly.Msg.LINKIT_SET_IBEACON_MINOR = "Minor ID";
Blockly.Msg.LINKIT_SET_IBEACON_RSSI = "RSSI";
Blockly.Msg.LINKIT_SET_IBEACON_TOOLTIP = "";