interface MsgTranslation {
  [language: string]:{
    [greeting:string]: string;
  } 
}

const translationMsg: MsgTranslation = {
  "en":{
  "greeting": "Hello! Welcome to our store ",
}
}

const translateText = (language: string, word: string): string => {
  return translationMsg[language][word]
}

console.log(translateText('en', 'greeting'))
