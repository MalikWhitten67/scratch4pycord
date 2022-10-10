import Blockly from "blockly/core";

const blockName = "discord_pydabaseappend";

const blockData = {
    "message0": "Append to Pydabase with name %1%2 add  key%3%4%5 Set key Content%6",
    "args0": [
        {
          "type":"input_dummy",
        },
        {
            "type": "input_value",
            "name": "name"
        },
        {
            "type":"input_dummy",
          },
          {
            "type": "input_value",
            "name": "append"
        },
        {
            "type":"input_dummy",
          },
          {
            "type": "input_value",
            "name": "content"
        },

    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour": "#4fa58d",
    "tooltip": "Append to pydabase"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const append = Blockly.JavaScript.valueToCode(block, "append", Blockly.JavaScript.ORDER_ATOMIC);
    const content = Blockly.JavaScript.valueToCode(block, "content", Blockly.JavaScript.ORDER_ATOMIC);
    const code = ` ${name}.update({"${append}": "${content}"})\n`
    return code;
};