import Blockly from "blockly/core";

const blockName = "discord_member";

const blockData = {
    "message0": "Bot Amount Of Guilds %1",
    "args0": [{
        "type": "input_dummy",
    }

],
    "output": "Presence",
    "colour": "#93c47d",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block
    var code = `len(bot.guilds)`;
    text
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
