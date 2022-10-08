import Blockly from "blockly/core";

const blockName = "general_id";

const blockData = {
    "message0": "Member%1 ",
    "args0": [
        {
            "type":"input_dummy",
          },

    ],
    "output":"String",
    "colour": "#4fa58d",
    "tooltip": "Get the member"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    
    const code = `ctx.member`
    block
     return [code, Blockly.JavaScript.ORDER_ATOMIC];
};