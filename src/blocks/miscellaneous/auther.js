import Blockly from "blockly/core";

const blockName = "interaction_author";

const blockData = {
    "message0": "Interaction Author %1",
    "colour": "#999999",
    "args0": [
        {
            "type": "input_dummy",
        },
    ],
    "tooltip": "Base Bot Block To connect to bot"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    block
    const code = `{interaction.user.id}`; 
    return code;
};