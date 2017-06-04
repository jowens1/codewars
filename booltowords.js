let boolToWord = bool => {
    return bool ? 'true' : 'false';
};

console.log(boolToWord(true) + ' ' + boolToWord(false));