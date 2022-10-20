import Blockly from "blockly/core";

const blockName = "member_mention";

const blockData = {
    "message0": "Mention Message Member %1",
    "args0": [{
        "type": "input_dummy",
    },
],
    "output": "String",
    "colour": "#93c47d",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = `ctx.author.mention`;
    text
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
