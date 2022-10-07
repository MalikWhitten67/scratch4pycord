import Blockly from "blockly/core";

const blockName = "general_lang";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "lang",
            "options": [
              [
                "English",
                'en'
              ],
              [
                "Spanish",
                'es'
              ],
              [
                "Chinese",
                'zh'
              ],
              [
                "Danish",
                'da'
              ],
              [
                "Dutch",
                'nl'
              ],
              [
                "Finnish",
                'fi'
              ],
              [
                "French",
                'fr'
              ],
              [
                "German",
                'de'
              ],
              [
                "Hindi",
                'hi'
              ],
              [
                "Japanese",
                'ja'
              ],
              [
                "Korean",
                'ko'
              ],
              [
                "Portuguese",
                'pt'
              ],
              [
                "Russian",
                'ru'
              ],
              [
                "Swedish",
                'sv'
              ],
              [
                "Vietnamese",
                'vi'
              ]
            ],
        }
    ],
    "output": "Language",
    "tooltip": "Choose a language."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const lang = block.getFieldValue("lang");
const code =  [`${lang}`, Blockly.JavaScript.ORDER_ATOMIC ];
return code;
};