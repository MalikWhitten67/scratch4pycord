import Blockly from "blockly/core";

const blockName = "discord_messagecontent";

const blockData = {
    "message0": "Message Content Starts With %1 ",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
        },
    ],
    "output": "String",
    "colour": "lime",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var content = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `message.content.startswith(${content}):`; 
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};