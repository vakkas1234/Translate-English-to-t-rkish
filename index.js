// translationModule.js

// Çeviri sözlüğü
const dictionary = {
    "hello": "merhaba",
    "world": "dünya",
    "how": "nasıl",
    "question": "soru",
     "you": "sen",
     "workbook": "calısma kitabı",
     "student book ": " öğrenci kitabı",


};

// Çeviri fonksiyonu
function translate(word){
    const translateword = dictionary[word.toLowerCase()]
    if(translateword){
        return translateword
    }
    else{
        return "I couldn't find vocabulary"
    }

}



// Konsol üzerinden çeviri yapma
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Please write a vocabulary ', (word)  =>{
console.log(`Result ${translate(word)}`)
rl.close()
})