#!/usr/bin/env node

const { showHelp } = require("yargs");
const utils = require("./utils.js");
const translate = require('@vitalets/google-translate-api');
const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");


const usage = chalk.green("\nHOW TO USE: transl <language_name> sentence to be translated");
yargs.usage(usage)
    .option("l", {
        alias: "language",
        describe: "List of all supported language.",
        type: "boolean",
        demandOption: false
    })
    .help(true)
    .argv;


if(yargs.argv._[0] == null){
    showHelp();
}

if(yargs.argv.l == true || yargs.argv.languages == true){
    utils.showAll();
}


let sentence = utils.parseSentence(yargs.argv._);
let sentenceToTransl = sentence.join(" ");

if(sentence == ""){
    console.error("\n" + chalk.green("You should try out some words or sentences you would like to translate."));
    console.log(chalk.green("Enter tansl --help to get started.") + "\n");
}

const langMap = new Map();

langMap.set("yoruba", "yo");
langMap.set("igbo", "ig");
langMap.set("hausa", "ha");
langMap.set("english", "en");
langMap.set("french", "fr");

if(sentence != ""){
    translate(sentenceToTransl, {from: 'en', to: langMap.get(yargs.argv._[0])}).then(res => {
        console.log("\n" + boxen( chalk.yellow(res.text), {padding: 1}) + "\n");
    }).catch(err => {
        // console.error(err);
        console.log("\n" + boxen( chalk.red("Please Check Your Internet Connection!!!"), {padding: 1}) + "\n");
        // console.log(yargs.argv);
    });
}


