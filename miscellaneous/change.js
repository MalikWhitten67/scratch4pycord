import Blockly from "blockly/core";

const blockName = "changeby";

const blockData = {
    "message0": "change variable %1 by %2 %3    ",
    "colour": "#ff2b94",
    "args0": [
        {
            "type":"field_input",
            "name":"name"
        },
        {
            "type":"input_dummy"
         },
        {
            "type": "input_value",
            "name": "value"
        },
    ],
    "previousStatement":null,
    "nextStatement":null,
    "tooltip": "Change variable by",
};
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var name = block.getFieldValue('name');
    const value = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
     ${name} += ${value}`; 
    return code;
};