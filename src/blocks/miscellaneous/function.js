import Blockly from "blockly/core";

const blockName = "discord_function";

const blockData = {
    "message0": "to %1  %2 %3    ",
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
            "type": "input_statement",
            "name": "do"
        },
    ],
    "tooltip": "Create A Function"
};
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var name = block.getFieldValue('name');
    const statements = Blockly.JavaScript.statementToCode(block, "do");
    const code = `
def ${name}():
  ${statements}\n`; 
    return code;
};