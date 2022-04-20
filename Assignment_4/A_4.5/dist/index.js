"use strict";
const translationMsg = {
    "en": {
        "greeting": "Hello! Welcome to our store ",
    }
};
const translateText = (language, word) => {
    return translationMsg[language][word];
};
console.log(translateText('en', 'greeting'));
