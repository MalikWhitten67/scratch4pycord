import Blockly from "blockly/core";

const blockName = "general_var";

const blockData = {
    "message0": "'%1' ",
    "args0": [
    {
      "type": "field_input",
      "name": "NAME"
    },

],  
    "output":"String",
    "colour": "#E8656A",
    "tooltip": "Add variable to something"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('NAME');
    var code = `${text}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}