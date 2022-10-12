import Blockly from "blockly/core";

const blockName = "general_textinput";

const blockData = {
    "message0": "❝ %1 ❞",
    "args0": [{
        "type": "field_input",
        "name": "TEXT",
        "text": ""
    }],
    "output": "String",
    "colour": "#6aa84f",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = `${text}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
