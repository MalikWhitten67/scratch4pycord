import Blockly from "blockly/core";

const blockName = "general_sendembed";

const blockData = {
    "message0": "Send Embed %1 ",
    "args0": [{
        "type": "field_input",
        "name": "TEXT",
        "text": ""
    }],
    "output": "String",
    "colour": "#4fa58d",
    "tooltip": "Insert text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = `embed=${text}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};