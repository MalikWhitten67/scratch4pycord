import Blockly from "blockly/core";

const blockName = "discord_pydabaseget";

const blockData = {
    "message0": "Get from pydabase with name %1%2 key %3%4",
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
              "name": "key"
          },

    ],
    "output":"String",
    "colour": "#4fa58d",
    "tooltip": "Get specific value from pydabaase"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const key = Blockly.JavaScript.valueToCode(block, "key", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${name}.get("${key}")`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};