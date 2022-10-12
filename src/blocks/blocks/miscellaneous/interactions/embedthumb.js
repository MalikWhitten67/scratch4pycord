import Blockly from "blockly/core";

const blockName = "embed_thumb";

const blockData = {
    "message0": "Set Thumbnail of Embed%1 %2 With%3 ",
    "args0": [
        {
            "type": "input_value",
            "name": "tt"
        },
    {
      "type":"input_dummy"
    },
    {
        "type": "input_value",
        "name": "name"
    },

    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4fa58d",
    "tooltip": "Add a thumbnail to embed"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const tt = Blockly.JavaScript.valueToCode(block, "tt", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
  ${tt}.set_thumbnail(url=${name})\n`
    return code;
};