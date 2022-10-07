import Blockly from "blockly/core";

const blockName = "general_command";

const blockData = {
    "message0": "On message event %1 Do%2",
    "args0": [
    {
        "type": "input_dummy",
    },
    {
        "type": "input_statement",
        "name":"statements",
    }


    ],
    "previousStatement":null,
    "nextStatement": null,
    "colour": "#4fa58d",
    "tooltip": "test"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const statements = Blockly.JavaScript.statementToCode(block, "statements");
var code = `
@client.event()
async def on_message(message):
   ${statements.trim()}`
return code
};