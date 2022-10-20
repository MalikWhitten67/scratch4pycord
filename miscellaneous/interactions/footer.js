

import Blockly from "blockly/core";

const blockName = "general_footer";

const blockData = {
    "message0": "Add Footer to Embed with name %1 %2 with Text %3%4",
    "args0": [
        {
          "type":"input_dummy",
        },
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
    const text = Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `\n
    ${name}.set_footer(text="${text}")`
    return code;
};