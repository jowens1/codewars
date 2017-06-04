
let moneyconversion = (num) => {
    return '$' + num.toFixed(2);

};

console.log(moneyconversion(3));
console.log(moneyconversion(3.1));
console.log(moneyconversion(3.10));
console.log(moneyconversion(3.99));
