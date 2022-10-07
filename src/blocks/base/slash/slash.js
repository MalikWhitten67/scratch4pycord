import Blockly from "blockly/core";

const blockName = "discord_slash";

const blockData = {
  "message0": "Create a Slash Command With Name %1 Then Add Description %2 ",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check":["String", "TEXT"]
    },
    {
      "type": "input_value",
      "name": "description",
      "check":["String", "TEXT"]
    },
    {
      "type": "input_statement",
      "name": "stuff",
      "check":["String", "TEXT"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "Create a Slash Commands",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const name = Blockly.Python.statementToCode(block, "name");
  let description = Blockly.Python.valueToCode(block, 'description', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
@bot.command(description="${description}")\n   async def${name.toLowerCase()}(ctx):`;
  return code;
};