import Blockly from "blockly/core";

const blockName = "discord_base";

const blockData = {
    "message0": "Connect To Bot With Token %1",
    "colour": "#999999",
    "args0": [
        {
            "type": "input_value",
            "name": "token"
        },
    ],
    "tooltip": "Base Bot Block To connect to bot"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const token = Blockly.JavaScript.valueToCode(block, "token", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `bot.run(${token})`; 
    return code;
};