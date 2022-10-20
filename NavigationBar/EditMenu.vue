<template>
    <b-nav-item-dropdown :text="$t('edit.title')" right>
        <b-dropdown-item @click="undo">{{ $t('edit.undo') }}</b-dropdown-item>
        <b-dropdown-item @click="redo">{{ $t('edit.redo') }}</b-dropdown-item>
        <b-dropdown-item @click="clear">{{ $t('edit.clear', {
            blockCount
        }) }}</b-dropdown-item>
        <b-dropdown-item @click="cleanUp">{{ $t('edit.cleanup') }}</b-dropdown-item>
        <b-dropdown-item @click="clearGhost">{{ $t('edit.clearGhost') }}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";
export default {
    name: "editmenu",
    computed: {
        blockCount: function() {
            return Blockly.getMainWorkspace() ? Blockly.getMainWorkspace().getAllBlocks().length : 0;
        }
    },
    methods: {
        undo() {
            Blockly.getMainWorkspace().undo(false);
        },
        redo() {
            Blockly.getMainWorkspace().undo(true);
        },
        clearGhost(){
            var allBlocks = Blockly.getMainWorkspace().getAllBlocks();
            var disabledBlocks = allBlocks.filter(function(block){return !block.isEnabled()})
            for(var i = 0;i < disabledBlocks.length; i++) disabledBlocks[i].dispose();
        },
        clear() {
            Blockly.getMainWorkspace().getAllBlocks().forEach((block) => block.dispose());
        },
        cleanUp(){
            Blockly.getMainWorkspace().cleanUp();
        }
    }
}
</script>
