import Blockly from "blockly/core";

const blockName = "interaction_reply";

const blockData = {
    "message0": "Interaction Reply %1",
    "args0": [{
        "type": "input_value",
        "name": "TEXT",
        "text": ""
    }],
    "previousStatement": null,
    "nextStatement":null,
    "colour": "#93c47d",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text =  Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    await ctx.respond(${text})`;
    return code;
};
