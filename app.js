function isPalindrom(str) {
    //Regex avec tous les caractères
    var re = /[\W_]/g;
    //Convertir toutes les lettres en minuscules et retire points et espaces
    var lowRegStr = str.toLowerCase().replace(re, '');
    //place les caractères dans un tableau puis les inverses
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    //Vérifie que la string de base = la string inversée 
    return reverseStr === lowRegStr;
  }
  const forbiddenWords = ['nul', 'nulle', 'nulles', 'nuls', 'imbécile', 'imbéciles', 'idiots', 'idiot', 'débiles', 'débile'];
function containForbiddenWords(message) {
    // Tableau contenant les mots interdits
    for (let i = 0; i < forbiddenWords.length; i++) {
        if (message.includes(forbiddenWords[i])) {
            return true;
        }
    }
    for (let index = 0; index < message.length; index++) {
        const item = message[index].toLocaleLowerCase();
        if (forbiddenWords.includes(item)) {
            result.push(item);
        }
}
}
function changeForbiddenWords(message) {
    const hasForbiddenWords = containForbiddenWords(message);

    if (!hasForbiddenWords) {
        return message;
}

const words = message.split(' ');

const result = words.map(w => {
    if (forbiddenWords.includes(w.toLocaleLowerCase())) {
        return 'xxxx';
    } else {
        return w;
    }
});

return result.join(' ');
}
// On exporte la variable que l'on doit test

export default {
    containForbiddenWords,
    changeForbiddenWords
}