import Blockly from "blockly/core";

const blockName = "discord_presence";

const blockData = {
    "message0": " Set Status %1 %2  to  %3",
    "args0": [{
        "type": "input_value",
        "name": "type",
        "check":["lang"]
    },
    {
        "type":"input_dummy"
    },
    {
        "type": "input_value",
        "name": "value2",
    }

],
    "previousStatement":null,
    "nextStatement":null,
    "colour": "#ff2b94",
    "tooltip": "Set Bots Presence"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var type =  Blockly.JavaScript.valueToCode(block, "type", Blockly.JavaScript.ORDER_ATOMIC);
    var value2 = Blockly.JavaScript.valueToCode(block, "value2", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `await bot.change_presence(status=discord.Status.online, activity=${type}(${value2}))\n`;
    return code;
};