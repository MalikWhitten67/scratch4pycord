import Blockly from "blockly/core";

const blockName = "general_list";

const blockData = {
    "message0": "Create a list named%1%2 With %3 %4",
    "colour": "#999999",
    "args0": [
        {
          "type":"input_dummy"
        },
        {
            "type": "input_value",
            "name": "name"
        },
        { 
           "type":"input_dummy"
        },
        {
            "type": "input_statement",
            "name":"statements",
        }
    
    ],
    "tooltip": "create a list"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "statements");
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
${name} = {${statements},}`;

    return code;
};