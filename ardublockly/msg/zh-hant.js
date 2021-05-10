var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
    translationLanguage: "中文",
    title: "Ardublockly",
    blocks: "積木",
    /* Menu */
    show: "顯示更多積木",
    open: "開啟",
    save: "儲存",
    open_block: "開啟積木檔",
    save_block: "儲存積木檔",
    save_sketch: "儲存Arduino檔",
    redo: "重作",
    undo: "復原",
    deleteAll: "全部刪除",
    codeswitch: "代碼切換",
    settings: "設定",
    documentation: "文件",
    reportBug: "回報錯誤",
    examples: "Arduino範例",
    exar: "範例程式與arduino可攜版",
    serial: "序列埠",
    blockfactory: "自訂積木",
    /* Settings */
    compilerLocation: "編譯器位置",
    compilerLocationDefault: "arduino.exe編譯器位置未知",
    compilerLocationSelect: "請輸入Arduino IDE的路徑",
    sketchFolder: "草稿碼目錄",
    sketchFolderDefault: "草稿碼目錄未知",
    sketchFolderSelect: "請輸入草稿碼儲存的資料夾",
    examplesFolder: "範例目錄",
    examplesFolderDefault: "範例目錄未知",
    examplesFolderSelect: "請輸入積木範本儲存的資料夾",
    arduinoBoard: "Arduino開發板",
    arduinoBoardDefault: "Arduino開發板未知",
    comPort: "序列埠",
    comPortDefault: "序列埠未知",
    baudrate: "鮑率",
    defaultIdeButton: "預設IDE按鈕",
    defaultIdeButtonDefault: "IDE選項設定未知",
    language: "語言",
    languageDefault: "語言未知",
    sketchName: "草稿碼名稱",

    /*Serial Monitor*/
    serial_monitor: "序列埠監控",
    timestamp: "時間標記",
    serial_input: "輸入",
    serial_receive: "接收",
    serial_send: "傳送",
    serial_port_error: "請先設定序列埠",

    /* Arduino console output */
    arduinoOpMainTitle: "Arduino IDE 輸出",
    arduinoOpWaiting: "等待Arduino IDE輸出...",
    arduinoOpUploadedTitle: "成功上傳Arduino草稿碼",
    arduinoOpVerifiedTitle: "成功驗證/編譯Arduino草稿碼",
    arduinoOpOpenedTitle: "使用Arduino IDE開啟草稿碼",
    arduinoOpOpenedBody: "草稿碼應該已經在Arduino IDE開啟.",
    arduinoPuttyOpenedTitle: "使用Putty開啟序列埠",
    arduinoPuttyOpenedBody: "Putty應已開啟",
    arduinoOpErrorTitle: "發生錯誤",
    arduinoOpErrorIdContext_0: "沒有錯誤",
    arduinoOpErrorIdContext_1: "建構或上傳失敗",
    arduinoOpErrorIdContext_2: "草稿碼不存在",
    arduinoOpErrorIdContext_3: "命令列參數不合法",
    arduinoOpErrorIdContext_4: "選項設定傳入 'get-pref' 旗標不存在",
    arduinoOpErrorIdContext_5: "尚不清楚，但Arduino IDE有時會因此出錯。",
    arduinoOpErrorIdContext_50: "未知的IDE錯誤",
    arduinoOpErrorIdContext_51: "無法建立草稿檔",
    arduinoOpErrorIdContext_52: "建立草稿碼的路徑錯誤",
    arduinoOpErrorIdContext_53: "無法找到 Arduino IDE<br>" +
        "arduino.exe編譯器位置尚未設定<br>" +
        "請在[設定]功能指定路徑",
    arduinoOpErrorIdContext_54: "我們準備如何處理這個Arduino草稿碼?<br>" +
        "啟動 IDE 的選項設定沒有設定<br>" +
        "請在[設定]功能選擇 IDE 選項設定",
    arduinoOpErrorIdContext_55: "序列埠不可用<br>" +
        "這個序列埠無法存取<br>" +
        "請檢查Arduino開發板是否正確的連接PC電腦, 且在[設定]功能選擇使用的序列埠",
    arduinoOpErrorIdContext_56: "未知的Arduino開發板<br>" +
        "Arduino開發板種類未設定<br>" +
        "請在[設定]功能選擇適當的Arduino開發板",
    arduinoOpErrorIdContext_52: "未知的伺服器錯誤",
    arduinoOpErrorIdContext_64: "無法解析JSON檔",
    arduinoOpErrorUnknown: "未知的錯誤",
    /*
    arduinoOpErrorUpVerTitle: "建構或上傳失敗",
    arduinoOpErrorSketchTitle: "草稿碼不存在",
    arduinoOpErrorFlagTitle: "命令列參數不合法",
    arduinoOpErrorFlagPrefTitle: "選項設定傳入 'get-pref' 旗標不存在",
    arduinoOpErrorIdeDirTitle: "無法找到 Arduino IDE",
    arduinoOpErrorIdeDirBody: "arduino.exe編譯器位置尚未設定.<br>" +
                              "請在[設定]功能指定路徑.",
    arduinoOpErrorIdeOptionTitle: "我們準備如何處理這個Arduino草稿碼?",
    arduinoOpErrorIdeOptionBody: "啟動 IDE 的選項設定沒有設定.<br>" +
                                 "請在[設定]功能選擇 IDE 選項設定.",
    arduinoOpErrorIdePortTitle: "序列埠不可用",
    arduinoOpErrorIdePortBody: "這個序列埠無法存取.<br>" +
                               "請檢查Arduino開發板是否正確的連接PC電腦, 且在[設定]功能選擇使用的序列埠.",
    arduinoOpErrorIdeBoardTitle: "未知的Arduino開發板",
    arduinoOpErrorIdeBoardBody: "Arduino開發板種類未設定.<br>" +
                                "請在[設定]功能選擇適當的Arduino開發板.",
    */
    /* Modals */
    noServerTitle: "Ardublockly應用程式沒有啟動",
    noServerBody: "<p>為了讓所有 Ardublockly 功能可正確啟用, Ardublockly桌面應用程式必須在本機電腦執行.</p>" +
        "<p>如果你是使用線上版本, 你將無法建立選項設定和載入積木程式至.</p>" +
        "<p>安裝說明請參閱 <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly檔案庫</a>.</p>" +
        "<p>如果Ardublockly已經安裝, 請確認應用程式正確的啟動且執行中.</p>",
    noServerNoLangBody: "如果Ardublockly應用程式不在執行中, 介面語言將無法完整更新.",
    addBlocksTitle: "更多積木",
    /* Alerts */
    loadNewBlocksTitle: "載入新積木?",
    loadNewBlocksBody: "載入新的XML檔將會取代目前工作區的積木程式.<br>" +
        "確認載入XML檔?",
    discardBlocksTitle: "刪除積木程式?",
    discardBlocksBody: "目前有 %1 積木程式在工作區.<br>" +
        "確認刪除這些積木程式?",
    invalidXmlTitle: "不合法的XML檔",
    invalidXmlBody: "XML檔案沒有成功剖析成積木程式. 請更新XML標籤碼再試一次.",
    invalidExampleTitle: "不合法的Example的路徑",
    invalidExampleBody: "尚未定義Example的路徑",
    /* Tooltips */
    uploadingSketch: "上傳草稿碼至Arduino開發板中...",
    uploadSketch: "上傳草稿碼至Arduino開發板",
    verifyingSketch: "驗證/編譯草稿碼中...",
    verifySketch: "驗證/編譯草稿碼",
    openingSketch: "正在Arduino IDE開啟草稿碼...",
    openSketch: "在IDE開啟草稿碼",
    notImplemented: "功能尚未實作",
    /* Prompts */
    ok: "確定",
    okay: "確定",
    cancel: "取消",
    return: "返回",
    /* Cards */
    arduinoSourceCode: "Arduino 草稿碼",
    blocksXml: "積木 XML 標籤碼",
    /* Toolbox Categories*/
    catLogic: "邏輯",
    catLoops: "迴圈",
    catMath: "運算",
    catFunctions: "程序",
    catList: "陣列",
    catText: "字串",
    catPin: "腳位",
    catVariables: "變數",
    catArray: "陣列",
    catInput: "輸入",
    catOutput: "輸出",
    catInputOutput: "輸入/輸出",
    catTime: "時間",
    catTone: "蜂鳴器",
    catMotors: "馬達",
    catRTC: "時鐘",
    catComms: "序列埠",
    catSensor: "感測器",
    catRTC: "時鐘",
    catWS2812Leds: "WS2812 LED 燈條",
    catI2CLCD: "I2C LCD 顯示器",
    catLEDMatrix: "LED 點矩陣",
    catPixetto: "Pixetto感測器",
    catLinkIt: "LinkIt",
    /*catLinkItWiFi: "LinkIt Wi-Fi",
    catLinkItMCS: "LinkIt MCS",
    catLinkItIR: "LinkIt 遙控器",
    catLinkItBLE: "LinkIt BLE周邊",
    catLinkItBeacon: "LinkIt BLE Beacon",*/
};
