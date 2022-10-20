import Blockly from "blockly/core";

const blockName = "discord_messagechannel";

const blockData = {
    "message0": "Send %1",
    "colour": "lime",
    "args0": [
        {
            "type": "input_value",
            "name": "value"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Send a message to the channel"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const content = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
    
    const code = `await message.channel.send(${content})`; 
    return code;
};