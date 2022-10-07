export default (Blockly) => {
  return (`
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">       

  <category name="Base" colour="#6873ff">

      <block type="general_textinput"/>

      <block type="discord_base"/>
      
      <block type="discord_onready"/>
      <block type="discord_print"/>
  
          
  </category>
  <category name="Logic" colour="#20ff30">
  <block type="discord_isequal"/>
  <block type="discord_if"></block>
  <block type="discord_greater"/>

  </category>
  <category name="Variable" colour="#ffa820">
  <block type="general_variable"></block>
  <block type="general_var"/>
  </category>
 
  <category name="Interactions" colour="#D4F2E7">

      <block type="discord_slash"/>
      <block type="general_embed"/>
      <block type="general_sendembed"/>
          
  </category>
   
  <category name="Messages" colour="#ffd966">

      <block type="discord_messagecontent"/>
      <block type="discord_messagechannel"/>

          
  </category>
  
  <category name="Joins" colour="#238ceb">

  <category name="Member Join" colour="#218ceb">

  <block type="general_slashcommand"/>

      
</category>

      
</category>

</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}