import Blockly from "blockly/core";

const blockName = "general_buttonint";

const blockData = {
    "message0": "Button Reply%1",
    "args0": [{
        "type": "input_value",
        "name":"TEXT"
    }],
    "previousStatement":null,
    "nextStatement":null,
    "colour": "#93c47d",
    "tooltip": "send something when button is clicked"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `await interaction.response.send_message(${name})`;
    return code;
};