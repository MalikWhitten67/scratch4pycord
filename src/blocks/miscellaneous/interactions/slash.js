import Blockly from "blockly/core";

const blockName = "general_slashcommand";

const blockData = {
    "message0": "Create a slash command %1  With Description Of  %2 Name of command %3  Command Interation Response %4 ",
    "args0": [
    {
        "type": "input_dummy",
    },
    {
        "type": "input_value",
        "name": "TEXT",
        "text": ""
    },
    {
        "type": "input_value",
        "name": "commandname",
        "text": ""
    },
    {
        "type": "input_value",
        "name": "respond",
        "text": ""
    }

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4fa58d",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const description = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const respond = Blockly.JavaScript.valueToCode(block, "respond", Blockly.JavaScript.ORDER_ATOMIC);
    const commandname = Blockly.JavaScript.valueToCode(block, "commandname", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    @bot.command(description="${description}")
    async def on_message(message):
       if message.content.startswith("${commandname}"):
            await message.channel.send(${respond})

    
    `
    return code;
};