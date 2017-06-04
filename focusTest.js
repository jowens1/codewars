let transform = str => {
    return str.split(' ').map((o) => { return o.match(/[\?|\.|!]$/) ? o.replace(/[\?|\.|!]$/, '') : o }).reverse()
        .join(' ').concat(str.split(' ').reduce( (a, c) => { return c.match(/[\?|\.|!]$/) ? c.match(/[\?|\.|!]$/) : c }));
};

let str1 = transform('Why would I ever need to do this?');
let str2 = transform(str1);

console.log(str1);
console.log(str2 + '\n');

let transform2 = str => {
    const [ match ] = str.match(/[\?|\.|!]$/) || [''];
    str = match ? str.substr(0, str.length - 1) : str;
    return str.split(' ').reverse().join(' ') + match
};

let str3 = transform2('Why would I ever need to do this');
let str4 = transform2(str1);

console.log(str3);
console.log(str4);