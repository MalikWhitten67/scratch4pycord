import Blockly from "blockly/core";

const blockName = "general_embed";

const blockData = {
    "message0": "Make Embed  with name %1 %2 With Color %3 %4 ",
    "args0": [
   
    {
        "type": "input_value",
        "name": "embedname",
        "text": ""
    },
    {
        "type": "input_dummy",
    },
    {
        "type": "input_value",
        "name": "color",
        "text": ""
    },
    {
        "type": "input_statement",
        "name": "STATEMENTS"
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
    const title = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const description = Blockly.JavaScript.valueToCode(block, "respond", Blockly.JavaScript.ORDER_ATOMIC);
    const embedname = Blockly.JavaScript.valueToCode(block, "embedname", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    ${embedname} = discord.Embed(
        title="${title}",
        description="${description}",
        color=discord.Colour.${color}(),
        
    )\n
    ${statements}

    
    `
    return code;
};