import Blockly from "blockly/core";

const blockName = "general_variable";

const blockData = {
    "message0": "Create A Variable Named%1 %2 Set variable to %3",
    "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
       "type":"input_dummy"
    },
    {
      "type": "input_value",
      "name": "value"
    }

],  

    "colour": "#E8656A",
    "tooltip": "Create a Variable"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text =  Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    var value2 = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${text} = ${value2}`;
    return code;
}