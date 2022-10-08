import Blockly from "blockly/core";

const blockName = "general_textinput";

const blockData = {
    "message0": "Guilds Bot Is In%1",
    "args0": [{
        "type": "input_dummy",
    }],
    "output": "String",
    "colour": "#93c47d",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = `len(bot.guilds)`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
