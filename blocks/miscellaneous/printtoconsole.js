import Blockly from "blockly/core";

const blockName = "discord_print";

const blockData = {
    "message0": "Print%1",
    "colour": "#999999",
    "args0": [
        {
            "type": "input_value",
            "name": "token"
        },
    ],
    "previousStatement":null,
    "tooltip": "Base Bot Block To connect to bot"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const token = Blockly.JavaScript.valueToCode(block, "token", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    print(${token})`; 
    return code;
};