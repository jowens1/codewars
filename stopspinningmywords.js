let doThing = str => {
    return str.split(' ')
        .map(o => {
            return o.length >= 5
                ? o.split('').reverse().join('')
                : o
        }).join(' ');
};

console.log('\n' + doThing('Reverse words with five or more letters') + '\n');
