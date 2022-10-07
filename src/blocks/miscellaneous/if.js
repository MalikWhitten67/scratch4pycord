import Blockly from "blockly/core";

const blockName = "discord_if";

const blockData = {
    "message0": "If %1  do%2 ",
    "colour": "#ff2b94",
    "args0": [
        {
            "type": "input_value",
            "name": "value",
        },
        {
            "type": "input_statement",
            "name": "do"
        },
    ],

    "tooltip": "Create an if statement"
};
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "do");
    const code = `\n if ${value} 
 ${statements}\n`; 
    return code;
};