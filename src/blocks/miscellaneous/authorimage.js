import Blockly from "blockly/core";

const blockName = "author_image";

const blockData = {
    "message0": "Get Members Avatar%1",
    "colour": "#999999",
    "args0": [
        {
            "type": "input_dummy",
        },
    ],
    "output":"String",
    "tooltip": "Get the avatar of user"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    block
    const code = `ctx.author.display_avatar`; 
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};