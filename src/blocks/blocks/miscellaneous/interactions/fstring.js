import Blockly from "blockly/core";

const blockName = "general_textf";

const blockData = {
    "message0": "F Stringed %1 ",
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
    var code = `f"${name}"`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
