import Blockly from "blockly/core";

const blockName = "discord_else";

const blockData = {
    "message0": "Else%1  do%2 ",
    "colour": "#ff2b94",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_statement",
            "name": "do"
        },
        
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Create an else statement"
};
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "do");
    const code = `
else: 
    ${statements}`; 
    return code;
};