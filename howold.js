const howOld = (dob, date) => {
    const x = date - dob;

    return x > 1 ?  'You are ' + x + ' years old' : 'You will be born in ' + x + " years.";
};

console.log(howOld(1982, 2017));
console.log(howOld(1982, 1890));


