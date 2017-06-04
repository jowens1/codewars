const address = "2701 Rocky Point Dr, Suite 500, Tampa, FL, 33706";
const address2 = "222 22nd St S, St Petersburg, FL, 33712";
let key = ['Address1', 'Address2', 'City', 'State', 'Zip'];

let newAddress = str => {
    let array = str.split(",");
    if (array.length === 4) key = key.filter(e => {
        return e !== key[key.indexOf('Address2')]
    });
    return array.reduce((previous, current, index) => {
        previous[key[index]] = current.trim();
        return previous
    }, {});
};

console.log(newAddress(address));
console.log(newAddress(address2));
