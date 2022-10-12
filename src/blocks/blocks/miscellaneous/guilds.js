import Blockly from "blockly/core";

const blockName = "general_guilds";

const blockData = {
    "message0": "Bot Amount Of Guilds%1",
    "args0": [{
        "type": "input_dummy",
    }],
    "output": "String",
    "colour": "#93c47d",
    "tooltip": "Amount of builds bot is in"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var code = `{len(bot.guilds)}`;
    block
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
