<template>
    <b-navbar toggleable="lg" type="dark" style="background-color:#161719;user-select:none;" id="navbar nav-main">
        <b-navbar-brand>
            <img src="../../assets/scratch_for_web.png" width="40" draggable="false">
            Scratch For PyCord
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <CodeModal></CodeModal>
                <FileMenu></FileMenu>
                <EditMenu></EditMenu>
                <ToolboxModal></ToolboxModal>
                <Socials></Socials>
                <b-nav-item href="https://discord.gg/ycAdUMNE9P" target="_blank">Support</b-nav-item>
                <Credit></Credit>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-button
                    style="border-right-color: #161719; border-radius: 0em; border-top-left-radius: 0.25em; border-bottom-left-radius: 0.25em">
                    <span contenteditable="true" id="docName">{{ $t("untitled") }}</span>
                </b-button>
                <b-button id="downloadAsHTMLFile" style="border-radius: 0em; border-right-color: #161719;"
                    @click="downloadToHtml">
                    <b-icon-download></b-icon-download>
                </b-button>
                <b-button id="v-step-3"
                    style="border-radius: 0em; border-top-right-radius: 0.25em; border-bottom-right-radius: 0.25em"
                    @click="displaySite">
                    <b-icon-play></b-icon-play>
                </b-button>

            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import Blockly from "blockly";
import FileMenu from "./FileMenu.vue";
import EditMenu from "./EditMenu.vue";
import CodeModal from "./CodeModal.vue";
import ToolboxModal from "./ToolboxModal.vue";
import Socials from "./socials.vue";
import Credit from "./Credit";
export default {
    name: "navbar",
    components: {
        FileMenu,
        EditMenu,
        CodeModal,
        ToolboxModal,
        Credit,
        Socials
    },
    // computed: {
    //     configurationValidated: function () {
    //         return  Blockly.getMainWorkspace() &&
    //                 Blockly.getMainWorkspace().getAllBlocks().some((block) => block.type === "s4d_login") &&
    //                 Blockly.getMainWorkspace().getAllBlocks().every((block) => !block.disabled && !block.warning);
    //     }
    // },
    mounted(){
        document.getElementById("docName").addEventListener("input", function() {
            document.title = `Scratch For Web - ${document.querySelector("#docName").textContent}`;
        }, false);
        const element = document.querySelector("#docName");
        element.spellcheck = false;
        element.focus(); 
        element.blur();
    },
    methods: {
        downloadToHtml(){
            const htmlContent = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
            const blob = new Blob([htmlContent])
            const a = document.createElement("a");
            a.style = "display: block";
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = "bot.py";
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        },
        displaySite(){
            console.log("ok")
            const javascriptContent = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
            const blob = new Blob([javascriptContent], {
                type: "text/python"
            })
            let newWindow = window.open('/')
            const url = window.URL.createObjectURL(blob);
            newWindow.location = url;
        }
    }
}
</script>
