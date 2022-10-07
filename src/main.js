import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import VueSwal from 'vue-swal';
import Vuei18n from 'vue-i18n';
import Blockly from "blockly";
import VueToast from 'vue-toast-notification';
import VueTour from 'vue-tour';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTour);
Vue.use(VueToast);
Vue.use(Vuei18n);
Vue.use(VueSwal);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["field", "block", "category", "xml", "mutation", "value", "sep"];

import r from "./require";

import blocklyLocaleEN from "blockly/msg/en";

import customLocaleEN from './locales/en';
import localforage from "localforage";
const messages = {
    en: customLocaleEN.websiteMessages
};
const i18n = new Vuei18n({
    locale: (messages[navigator.language.split("-")[0]] ? navigator.language.split("-")[0] : "en"),
    messages: messages
});

import toolbox from "./toolbox";
//import {Backpack} from '@blockly/workspace-backpack';
import Theme from '@blockly/theme-dark';
Vue.mixin({
    methods: {
        async reloadWorkspace() {
            let val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
            // Get current workspace
            let workspace = Blockly.getMainWorkspace();
            // Convert it to a dom string
            const dom = Blockly.Xml.workspaceToDom(workspace);
            // Delete the current workspace
            workspace.dispose();
            // Create a new workspace (with the good language)
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), {
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                },
                renderer: "zelos",
                theme: Theme,
                zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
                move: {
                    scrollbars: {
                        horizontal: true,
                        vertical: true
                    },
                    drag: true,
                    wheel: true
                },
                toolbox: toolbox(Blockly, val)
            });

            Blockly.Xml.domToWorkspace(dom, newWorkspace);
            // Update the workspace in the vuex store
            this.$store.commit("setWorkspace", {
                workspace: newWorkspace
            })
                ;

            // Return the workspace
            return workspace;
        },
        setLanguage(locale) {
            switch (locale) {
                case "en":
                    // Change Blockly language for default blocks
                    Blockly.setLocale(blocklyLocaleEN);
                    // Change Blockly language for custom blocks
                    customLocaleEN.applyBlocklyLocale();
                    // Change website languages (navbar, etc...)
                    this.$root.$i18n.locale = "en";
                    break;
                default:
                    break;
            }
        },
        getWorkspaceCode() {
            if (!Blockly.getMainWorkspace()) return "";
            let requires = [
                `?`
            ]
            let requiresjscode = [`?`]
            r(requires, requiresjscode, Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()))
            setTimeout(async () => {
                await localforage.setItem("requires", requires)
            }, 1000)
            return `

${Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace())}

`;
        }
    }
});


new Vue({
    store,
    render: h => h(App),
    i18n
}).$mount("#app");

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-tour/dist/vue-tour.css';
