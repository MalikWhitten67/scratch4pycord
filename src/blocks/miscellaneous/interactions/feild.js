

import Blockly from "blockly/core";

const blockName = "general_field";

const blockData = {
    "message0": "Add Field to Embed with name %1 %2 with title %3 And Value of %4 %5 Make feild inline? %6",
    "args0": [
        {
          "type":"input_dummy",
        },
        {
            "type": "input_value",
            "name": "name"
        },

    {
        "type": "input_value",
        "name": "title"
    },
    {
      "type":"input_dummy"
    },
    {
        "type": "input_value",
        "name": "value"
    },
    {
        "type": "input_value",
        "name": "true"
    }

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
    const value = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
    const inline = Blockly.JavaScript.valueToCode(block, "true", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `  ${name}.add_field(name="${title}", value=${value}, inline=${inline})\n`
    return code;
};