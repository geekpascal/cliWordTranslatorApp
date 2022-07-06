const { languages } = require("@vitalets/google-translate-api");

module.exports = { 
    parseSentence: parseSentence,
    showAll: showAll,
 };

function parseSentence(words) {
    return words.slice(1);
}

function showAll(){
    console.log("\nThe ISO-639-1 Code: Language Name\n")
    for(const key in nigerianLang) {
        console.log(`${key}: ${nigerianLang[key]}`)
    }
}    


let nigerianLang = {
    yo : languages.yo,
    ig : languages.ig,
    ha : languages.ha,
    en : languages.en,
    fr : languages.fr
}

