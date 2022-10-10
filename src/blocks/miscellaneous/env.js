import Blockly from "blockly/core";

const blockName = "discord_env";

const blockData = {
    "message0": "load.env.%1 %2  ",
    "args0": [
        {
            "type": "input_value",
            "name": "tt"
        },
    {
      "type":"input_dummy"
    },

    ],
    "output":"string",
    "colour": "#4fa58d",
    "tooltip": "Load token from env file"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const token = Blockly.JavaScript.valueToCode(block, "tt", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `os.getenv("${token}")`
    return code;
};