import Blockly from "blockly/core";

const blockName = "dm_member";

const blockData = {
    "message0": "Send%1%2 in members dms%3 ",
    "args0": [
        {
            "type":"input_dummy",
        },
        {
            "type":"input_value",
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
    const message = Blockly.JavaScript.valueToCode(block, "tt", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `await ctx.author.send(${message})`;
    return code;
};
