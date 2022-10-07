<template>
    <div id="app">
        <NavBarComponent id="navSpace"></NavBarComponent>
        <BlocklyComponent id="blocklySpace" :options="options"></BlocklyComponent>
    </div>
</template>

<script>

import Blockly from "blockly";
import NavBarComponent from "./components/NavigationBar/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";

Blockly.Tooltip.HOVER_MS = 100;

import "./blocks"; // Load the blocks
// Load folders with blocks
import "./prompt";
import "./blocks/miscellaneous";

import Theme from '@blockly/theme-modern';

export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
    },
    beforeCreate(){
        this.$root.$i18n.locale = this.$store.state.blocklyLocale;
    },
    mounted(){
        if (!("ScratchNative" in window) && window.parent?.ScratchNative) window.ScratchNative = window.parent.ScratchNative;
        const tourDone = localStorage.getItem('tourDone');
        if (tourDone !== null) this.$store.commit('setTour', {
            status: tourDone
        });
        const blocklyLocale = localStorage.getItem('blocklyLocale');
        if (blocklyLocale !== null) {
            this.$store.commit('setLocale', {
                newLocale: blocklyLocale
            });
            this.setLanguage(blocklyLocale);
        }
    },
    data() {
      //month starts at 0 day starts at 1
      if ((new Date().getMonth()) == 72 && ((new Date().getDate())) == 144) {
        return {
            options: {
                renderer: "zelos",
                theme: Theme,
                  collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
    rtl: true,
                zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                }
            },
            move:{
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: true},
            vueTourOptions: {
                labels: {
                    buttonSkip: this.$t('tour.skip'),
                    buttonPrevious: this.$t('tour.previous'),
                    buttonNext: this.$t('tour.next'),
                    buttonStop: this.$t('tour.finish')
                },
                steps: [
                    {
                        target: '#v-step-0',
                        content: this.$t('tour.steps.load_examples'),
                        params: {
                            enableScrolling: false
                        }
                    },
                    {
                        target: '#v-step-1',
                        content: this.$t('tour.steps.run_test'),
                        params: {
                            enableScrolling: false
                        }
                    },
                    {
                        target: '#v-step-2',
                        content: this.$t('tour.steps.export_code'),
                        params: {
                            enableScrolling: false
                        }
                    }
                ]
            }
        }
           } else {
      return {
            options: {
                renderer: "zelos",
                theme: Theme,
                zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                }
            },
            move:{
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: true},
            vueTourOptions: {
                labels: {
                    buttonSkip: this.$t('tour.skip'),
                    buttonPrevious: this.$t('tour.previous'),
                    buttonNext: this.$t('tour.next'),
                    buttonStop: this.$t('tour.finish')
                },
                steps: [
                    {
                        target: '#v-step-0',
                        content: this.$t('tour.steps.load_examples'),
                        params: {
                            enableScrolling: false
                        }
                    },
                    {
                        target: '#v-step-1',
                        content: this.$t('tour.steps.run_test'),
                        params: {
                            enableScrolling: false
                        }
                    },
                    {
                        target: '#v-step-2',
                        content: this.$t('tour.steps.export_code'),
                        params: {
                            enableScrolling: false
                        }
                    }
                ]
            }
        }
           }
    }
}

</script>

<style>
#app {
        font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
 
#blocklySpace {
    position: absolute;
    width: 100%;
    height: 94%;
}

.boldtext {
    font-weight: bolder;
}

.testopa {
    opacity: 0.1;
}
</style>
