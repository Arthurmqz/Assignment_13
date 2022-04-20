"use strict";
const translationMsg = {
    "en": {
        "greeting": "Hello! Welcome to our store ",
    }
};
const translationNumber = {
    'en': {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five'
    }
};
const translateText = (language, input) => {
    if (typeof input == 'string') {
        return translationMsg[language][input];
    }
    else if (typeof input == 'number') {
        const purchases_left = (5 - input);
        return `We thank you for your purchase, only ${translationNumber[language][purchases_left]} more until you can enjoy a free cup of coffee!`;
    }
    else {
        return 'Incorrect input type detected';
    }
};
console.log(translateText('en', 'greeting'));
console.log(translateText('en', 3));
