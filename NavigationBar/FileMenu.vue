<template>
     <b-nav-item-dropdown :text="$t('file.title')" right>
        <b-dropdown-item @click="askForFile">{{ $t('file.open') }}</b-dropdown-item>
        <input hidden @change="load" id="load-code" type="file" accept=".s4w">
        <b-dropdown-item v-b-modal.code-modal>{{ $t('file.javascript') }}</b-dropdown-item>
        <b-dropdown-item @click="copy">{{ $t('file.copy')}}</b-dropdown-item>
        <b-dropdown-item @click="save">{{ $t('file.save') }}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";
import JSZip from "jszip";
//import beautify from "js-beautify";

export default {
    name: "filemenu",
    methods: {
        copy() {
            var url = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace())
           navigator.clipboard.writeText(url)
        },
        //viewCode() {
        //    alert(Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()));
        //},
        askForFile(){
            document.querySelector("#load-code").click();
        },
        load(){
          this.$swal({
                title: this.$t('file.confirm.title'),
                text: this.$t('file.confirm.text'),
                buttons: {
                    cancel: this.$t('file.confirm.cancel'),
                    no: {
                        text: this.$t('file.confirm.no'),
                        value: false,
                        className: "red-button"
                    },
                    yes: {
                        text: this.$t('file.confirm.yes'),
                        value: true
                    }
                },
                closeOnClickOutside: false
            }).then(result => {
                if(typeof result == "object"){
                    return;
                } else if (result) {
                    Blockly.getMainWorkspace().getAllBlocks().forEach((block) => block.dispose());
                }
            const file = document.getElementById("load-code").files[0];
            const documentName = file.name.split(".").slice(0, file.name.split(".").length-1);
            document.querySelector("#docName").textContent = documentName;
            const reader = new FileReader();
            reader.onload = (e) => {
                JSZip.loadAsync(e.target.result)
                    .then((data) => {
                    if (data.file("blocks.xml")) {
                        return data.file("blocks.xml").async("string")
                    }
                })
                .then((text) => {
                    const xml = Blockly.Xml.textToDom(text);
                    Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
                }).catch(() => {
                    this.$toast.open({
                        message: this.$t('load.error'),
                        type: "error",
                        dismissible: true,
                        duration: 10000
                    });
                });
            };
            if (file) {
                reader.readAsArrayBuffer(file);
                document.getElementById("load-code").setAttribute("value", "");
            }
        });
        },
        save(){
            const zip = new JSZip();
            const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace()));
            const requirements = "pycord"
            const fileName = `${encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, ' ')}.s4pycord`;
            zip.file("blocks.xml", xmlContent,  "requirements.txt", requirements);
            zip.generateAsync({
                type: "blob"
            })
            .then((blob) => {
                const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            });
        }
    }
}
</script>
