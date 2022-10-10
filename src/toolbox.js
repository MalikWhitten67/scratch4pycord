export default (Blockly) => {
  return (`
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">       

  <category name="Base" colour="#6873ff">

      <block type="general_guilds"/>

      <block type="discord_base">
      <value name="token">
      <block type="discord_env"/>
      </value>
      </block>
      <block type="discord_env">
      <value name="tt">
      <block type="general_textinput"/>
      </value>
      </block>

      
      <block type="discord_onready"/>
      <block type="discord_print"/>
      <block type="general_presence"/>
  
          
  </category>
  <category name="Math" colour="brown">
  <block type="general_mathinput"/>
  </category>
  <category name="Logic" colour="#20ff30">
  <block type="discord_isequal"/>
  <block type="discord_if"></block>
  <block type="discord_else"/>
  <block type="discord_greater"/>
  


  </category>
  <category name="List">
  <block type="general_list">
  <mutation items="0" />
  </block>
  <block type="general_listitem"/>
  </category>
  <category name="Loops" colour="#F5CCCC">
  <block type="general_loop"/>
  </category>
  <category name="Functions">
  <block type="discord_function"/>
  <block type="discord_func"/>
  </category>
  <category name="Variable" colour="#ffa820">
  <block type="general_variable"></block>
  <block type="general_var"/>
  </category>
  <category name="Text">
  <block type="general_textnon"/>
  <block type="general_textstringed"/>
  <block type="general_textf"/>
  <block type="general_textinput"/>
  </category>

 <category name="Embeds" colour="green">
 <block type="general_sendembed"/>
 <block type="general_embed"/>
 <block type="general_field">
 <value name="true">
 <block type="general_bool"/>
 </value>
 </block>
 <block type="discord_embedimage"/>
 <block type="general_auth"/>
 <block type="embed_thumb"/>
 <block type="general_footer"/>
 </category>
  <category name="Interactions" colour="#D4F2E7">
     
      <block type="general_slashcommand"/>
     
      <block type="interaction_reply"/>
          
  </category>
   
  <category name="Messages" colour="#ffd966">

      <block type="discord_messagecontent"/>
      <block type="discord_messagechannel"/>

          
  </category>
  <category name="Members">
  <block type="member_mention"/>
  <block type="general_id"/>
  <block type="author"/>
  <block type="author_image"/>
  </category>
  
  <category name="Joins" colour="#238ceb">

  <category name="Member Join" colour="#218ceb">

      
</category>

      
</category>
<category name="Pydabases">
<block type="general_pydabase"/>
<block type="discord_pydabaseappend"/>
<block type="discord_pydabaseget"/>
</category>

</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}