import Blockly from "blockly/core";

const blockName = "general_button";

const blockData = {
    "message0": "Create a button named %1  Set label to%2 set style to %3 %4%5 set emoji to%6 set button content%7%8",
    "args0": [

    {
        "type": "input_value",
        "name": "TEXT",
    },
    {
        "type": "input_value",
        "name": "respond",
    },
    {
        "type":"input_dummy"
      },
    {
        "type": "input_value",
        "name": "style",
    },
    {
        "type":"input_dummy"
      },
      {
        "type": "input_value",
        "name": "emoji",
    },
      {
        "type":"input_dummy"
      },
    {
        "type": "input_statement",
        "name": "statements",
    }

    ],

    "colour": "#93c47d",
    "tooltip": "Create a button"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const description = Blockly.JavaScript.valueToCode(block, "respond", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const emoji = Blockly.JavaScript.valueToCode(block, "emoji", Blockly.JavaScript.ORDER_ATOMIC);
    const style = Blockly.JavaScript.valueToCode(block, "style", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "statements");
    const code = `
class ${name}(discord.ui.View): 
   @discord.ui.button(label="${description}", style=discord.ButtonStyle.${style}, emoji="${emoji}") 
   async def button_callback(self, button, interaction):
         ${statements}
    
 

    
    `
    return code;
};