import Blockly from "blockly/core";

const blockName = "general_textnon";

const blockData = {
    "message0": "Non stringed %1 ",
    "args0": [{
        "type": "input_value",
        "name": "TEXT",
    }],
    "output": "String",
    "colour": "#6aa84f",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
