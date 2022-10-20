import Blockly from "blockly/core";

const blockName = "general_buttonsend";

const blockData = {
    "message0": "Send button%1 ",
    "args0": [{
        "type": "field_input",
        "name": "TEXT",
        "text": ""
    }],
    "output": "String",
    "colour": "#93c47d",
    "tooltip": "send button"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = `view=${text}()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};