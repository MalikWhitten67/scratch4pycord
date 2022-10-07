export default (Blockly) => {
  return (`
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">       

  <category name="Base" colour="#6873ff">

      <block type="general_textinput"/>

      <block type="discord_base"/>
      
      <block type="discord_onready"/>
      <block type="discord_print"/>
      <block type="general_presence"/>
      <block type="discord_member"/>
  
          
  </category>
  <category name="Logic" colour="#20ff30">
  <block type="discord_isequal"/>
  <block type="discord_if"></block>
  <block type="discord_greater"/>

  </category>
  <category name="Functions">
  <block type="discord_function"/>
  <block type="discord_func"/>
  </category>
  <category name="Variable" colour="#ffa820">
  <block type="general_variable"></block>
  <block type="general_var"/>
  </category>
 <category name="Embeds">
 <block type="general_sendembed"/>
 <block type="general_field"/>
 <block type="general_footer"/>
 </category>
  <category name="Interactions" colour="#D4F2E7">
     
      <block type="general_slashcommand"/>
      <block type="general_embed"/>
      <block type="interaction_reply"/>
          
  </category>
   
  <category name="Messages" colour="#ffd966">

      <block type="discord_messagecontent"/>
      <block type="discord_messagechannel"/>

          
  </category>
  <category name="Members">
  <block type="member_mention"/>
  </category>
  
  <category name="Joins" colour="#238ceb">

  <category name="Member Join" colour="#218ceb">

      
</category>

      
</category>

</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}