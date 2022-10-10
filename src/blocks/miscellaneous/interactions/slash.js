import Blockly from "blockly/core";

const blockName = "general_slashcommand";

const blockData = {
    "message0": "Create a slash command %1%2  With Description %3%4",
    "args0": [

    {
        "type": "input_value",
        "name": "TEXT",
    },
    {
      "type":"input_dummy"
    },
    {
        "type": "input_value",
        "name": "respond",
    },
    {
        "type": "input_statement",
        "name": "statements",
    }

    ],

    "colour": "#93c47d",
    "tooltip": "Create a slash command"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const description = Blockly.JavaScript.valueToCode(block, "respond", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "statements");
    const code = `
@bot.command(description=${description})
async def ${name}(ctx):
     ${statements}

    
    `
    return code;
};