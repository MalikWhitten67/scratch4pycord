


import Blockly from "blockly/core";

const blockName = "general_auth";

const blockData = {
    "message0": "Set Author of Embed%1 %2 with %3",
    "args0": [
     
        {
            "type": "input_value",
            "name": "name"
        },
        {
            "type":"input_dummy",
          },
        {
            "type": "input_value",
            "name": "title"
        },

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4fa58d",
    "tooltip": "Insert feild into embed"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const title = Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${name}.set_author(name=${title})`
    return code;
};