import Blockly from "blockly/core";

const blockName = "general_listitem";

const blockData = {
    "message0": "Add Item%1%2%3",
    "colour": "#999999",
    "args0": [
        {
          "type":"input_dummy"
        },
        {
            "type": "input_value",
            "name": "name"
        },
        {
            "type":"input_dummy"
          },
    
    ],
    "nextStatement":null,
    "previousStatement":null,
    "tooltip": "Add an item to  a list"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `"{key}":"${name}"`;
    return code;
};