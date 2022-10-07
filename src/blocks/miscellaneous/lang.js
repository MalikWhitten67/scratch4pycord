import Blockly from "blockly/core";

const blockName = "general_presence";

const blockData = {
    "message0": "%1",
    "colour": '%{BKY_TEXTS_HUE}',
    "args0": [
        {
            "type": "field_dropdown",
            "name": "lang",
            "options": [
              [
                "Watching",
                'discord.ActivityType.watching'
              ],
              [
                "Listening",
                'discord.ActivityType.listening'
              ],
            ],
        }
    ],
    "output": "lang",
    "tooltip": "Set custom bot status."
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