import Blockly from "blockly/core";

const blockName = "discord_func";

const blockData = {
    "message0": "%1  ",
    "colour": "#ff2b94",
    "args0": [
        {
            "type":"field_input",
            "name":"name"
        },
    ],
    "previousStatement":null,
    "nextStatement":null,
    "tooltip": "Create A Function"
};
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('name');
    const code = `
  ${text}()`; 
    return code;
};