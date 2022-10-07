import Blockly from "blockly/core";

const blockName = "discord_onready";

const blockData = {
    "message0": "On ready %1 Do %2",
    "colour": "#999999",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_statement",
            "name": "token"
        },
    ],
    "tooltip": "Define what bot does when its ready"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "token");
    const code = `
import discord

@bot.event
async def on_ready():
    ${statements}

`; 
    return code;
};