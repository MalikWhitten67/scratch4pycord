import Blockly from "blockly/core";

const blockName = "general_embed";

const blockData = {
    "message0": "Create an embed %1  with name %2 With Title Of  %3 Description of Embed %4  Set Embed Color %5 Feilds %6 ",
    "args0": [
    {
        "type": "input_dummy",
    },
    {
        "type": "input_value",
        "name": "embedname",
        "text": ""
    },
    {
        "type": "input_value",
        "name": "TEXT",
        "text": ""
    },
    {
        "type": "input_value",
        "name": "respond",
        "text": ""
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
        color=${color},
        ${statements}
    )

    
    `
    return code;
};