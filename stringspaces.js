let str = 'This is a string';
const noSpace = str => {
    return str.split(' ').join('');
}

console.log(noSpace(str));