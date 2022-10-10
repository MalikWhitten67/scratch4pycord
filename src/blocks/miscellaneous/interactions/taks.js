import Blockly from "blockly/core";

const blockName = "general_loop";

const blockData = {
    "message0": "Loop for%1  %2",
    "args0": [{
        "type": "input_value",
        "name": "type",
    },
    {
        "type": "input_statement",
        "name": "statements",
    }
    
    
    ,],
    "nextStatement":null,
    "previousStatement":null,
    "colour": "#F5CCCC",
    "tooltip": "Loop something"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('type');
    const statements = Blockly.JavaScript.statementToCode(block, "statements");
    var code = `
@tasks.loop(seconds=${text}):
${statements}`;
    return code;
};