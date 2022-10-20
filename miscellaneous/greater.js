import Blockly from "blockly/core";

const blockName = "discord_greater";

const blockData = {
    "message0": " %1 > %2 %3",
    "args0": [{
        "type": "input_value",
        "name": "TEXT",
    },
    {
        "type":"input_dummy"
    },
    {
        "type": "input_value",
        "name": "value2",
    }

],
    "output": "String",
    "colour": "#ff2b94",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text =  Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    var value2 = Blockly.JavaScript.valueToCode(block, "value2", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${text} > ${value2}:`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};