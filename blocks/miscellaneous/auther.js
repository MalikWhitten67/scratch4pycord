import Blockly from "blockly/core";

const blockName = "author";

const blockData = {
    "message0": "Author Id %1",
    "colour": "#999999",
    "args0": [
        {
            "type": "input_dummy",
        },
    ],
    "output":"String",
    "tooltip": "Grab the Users Id"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    block
    const code = `ctx.author.id`; 
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};