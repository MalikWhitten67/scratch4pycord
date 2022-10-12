import Blockly from "blockly/core";

const blockName = "general_pydabase";

const blockData = {
    "message0": "Create A  Pydabase With Name %1%2%3",
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

    ],
    "colour": "#4fa58d",
    "tooltip": "Open A File"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);

    const code = `${name} = {}\n`
    return code;
};