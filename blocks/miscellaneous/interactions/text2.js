import Blockly from "blockly/core";

const blockName = "general_textstringed";

const blockData = {
    "message0": "Stringed %1",
    "args0": [{
        "type": "input_value",
        "name": "name",
    }],
    "output": "String",
    "colour": "#6aa84f",
    "tooltip": "create stringed items"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `"${name}"`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
