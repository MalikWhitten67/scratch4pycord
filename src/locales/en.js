import Blockly from "blockly";

import blocklyMessages from "./en-US.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Untitled document",
    help: "Help",
    load: {
        error: "The uploaded file was corrupted and cannot be loaded.",
    },
    token:{
        title:"?",
        load:"?",
        save:"?",
        text2:"?",
        save2:"?",
        error:"?",
        text3:"?",
        save3:"?",
        success:"?",
        erros:"?",
        load2:"?",
        text4:"?",
        cancels:"?",
        loadss:"?",
        successs:"?",
        all:"?",
        delete:"?",
        deletee:{
            title:"?",
            success:"?",
            load:"?",
            cancel:"?",
            text:"?",
        }
    },
    file: {
        copy:"Copy Exported Code",
        title: "File",
        javascript: "Export to Code",
        open: "Open a file...",
      confirm: {
            title: "Delete current blocks?",
            text: "Would you like to remove the current blocks before importing the file?",
            cancel: "Cancel",
            yes: "Yes",
            no: "No",
        },
        save: "Save",
    },
    toolbox:{
        title:"Toolbox",
        hide:"Hide",
        show:"Show",
    },
    edit: {
        title: "Edit",
        undo: "Reverse Action",
        redo: "Redo Action",
        clear: "Delete All Blocks",
        cleanup: "Clean Up Blocks",
        cleardb: "Clear the Database",
        clearGhost:"Clear Ghost Blocks",
    },
    lang: {
        title: "?",
    },
    examples: {
        title: "?",
        confirm: {
            title: "Delete current blocks?",
            text: "Would you like to remove the current blocks before importing the example?",
            cancel: "Cancel",
            yes: "Yes",
            no: "No",
        },
        loaded: "?",
        ping_pong: "?",
	random:"?",
        command_parsing: "?",
      bettercmd: "?", 
        leveling: "?",
        button: "?",
	image_gen: "?",
        imgedit: "?",
	economy: "?",
	aki:"?",
        music: "?",
	backup:"?",
      reddit:"?",
      ticket:"?",
      cooldown: "?",
    },
    download: {
        title: "Download your code as ZIP?",
        content: {
            title: "?",
            unzipFile: "?",
            node: "?",
            start: "?",
            done: "?",
        },
        cancel: "Cancel",
        confirm: "Download",
    },
    warnings: {
        login_block: "Unused Modal"
    },
    run_modal: {
        title: "Click Start to test your bot!",
        start: "Start the bot",
        stop: "Stop the bot",
        invalid_token: "Unable to connect to Discord... Maybe your bot's token isn't valid!",
        error: "Unable to connect to Discord... Try again later!",
        disabled: "This feature is only available using the Scratch For Discord App (get it {here})",
        here: "here",
    },
    code_modal: {
        title: "Exported code of your blocks",
    },
    autosave:{
        cancell:"Cancel",
        confirm:"Load",
        title:"Auto Save",
        text:"Your auto save has been loaded!",
        title2:"An auto save of a project has been found! Do you want to load it?",
    },
    save:{
        title:"Auto Save",
    },
    prebuild:{
        title:"Pre Builds",
        load:"Load  Pre Build",
        save:"Save Pre Build as...",
        text2:"Choose a Name:",
        save2:"Save",
        error:"There is alredy a Pre-Build with that name",
        text3:"Pre-Build:",
        save3:"Save",
        success:"Succesfully saved Pre-Build as ",
        erros:"You don/'t have any Pre-Build saved in the Database!",
        load2:"Loaded Pre-Build!",
        text4:"Choose a Pre-Build that you want to load!",
        cancels:"Cancel",
        loadss:"Load",
        successs:"Succesfully loaded Pre-Build!",
        all:"Amount of Pre-Build: {blockCount}",
        delete:"Delete Pre-Build from the Database",
        deletee:{
            title:"Delete Pre-Build:",
            success:"Succesfully deleted Pre Build from the database!",
            load:"Delete",
            cancel:"Cancel",
            text:"Choose a Pre-Build that you want to delete:",
        },
        downloadd:"Download Pre-Build",
        download:{
            load2:"Donwload Pre-Build",
            successs:"Succesfully downloaded the Pre-Build!",
            loadss:"Download",
            cancels:"Cancel",
            text4:"Choose a Pre Build that you want to download:",
        }
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
}; 
