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
  <category name="Math" colour="#eeeeee">
  <block type="general_mathinput"/>
  </category>
  <category name="Logic" colour="#20ff30">
  <block type="discord_isequal"/>
  <block type="discord_if"></block>
  <block type="discord_else"/>
  <block type="discord_greater"/>
  


  </category>
  <category name="List" colour="#5b5b5b">
  <block type="general_list">
  <mutation items="0" />
  </block>
  <block type="general_listitem"/>
  </category>
  <category name="Loops" colour="#F5CCCC">
  <block type="general_loop"/>
  </category>
  <category name="Functions" colour="#ff2b94">
  <block type="discord_function"/>
  <block type="discord_func"/>
  </category>
  <category name="Variable" colour="#e74539">
  <block type="general_variable"></block>
  <block type="general_var"/>
  </category>
  <category name="Text" colour="#6aa84f">
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
  <category name="Interactions" colour="#93c47d">
     
      <block type="general_slashcommand"/>
     
      <block type="interaction_reply"/>
      <category name="Buttons">
      <block type="general_button"/>
      <block type="general_buttonsend"/>
      <block type="general_buttonint"/>
      </category>
      <category name="Pages" colour="red">
      </category>
          
  </category>
   
  <category name="Messages" colour="#b9ff1c">

      <block type="discord_messagecontent"/>
      <block type="discord_messagechannel"/>

          
  </category>
  <category name="Members" colour="#4c1130">
  <block type="member_mention"/>
  <block type="general_id"/>
  <block type="author"/>
  <block type="author_image"/>
  <block type="dm_member"/>
  </category>
  
  <category name="Joins" colour="#238ceb">

  <category name="Member Join" colour="#218ceb">
  <block type="on_join"/>
      
</category>

      
</category>
<category name="Pydabases" colour="#0DDBB0">
<block type="general_pydabase"/>
<block type="discord_pydabaseappend"/>
<block type="discord_pydabaseget"/>
</category>

</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
      return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))
    
}
