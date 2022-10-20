
import Blockly from "blockly/core";

const blockName = "on_join";

const blockData = {
    "message0": "On Member Join Event do%1%2%3",
    "args0": [
        {
            "type":"input_dummy",
        },
        {
            "type":"input_statement",
            "name":"tt"
        },
        {
            "type":"input_dummy",

        },
    ],

    "previousStatement": null,
    "nextStatement":null,
    "colour": "#93c47d",
    "tooltip": "On join event"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "tt");
    var code = `
@bot.event
async def on_member_join(member):
   ${statements}`;
    return code;
};
