// let isPrime = num => {
//     let result = true
//     if (num <= 1){
//         result = false;
//     }
//     for(let i = 2; i < num; i++){
//         if(num %i === 0){
//             result = false;
//             break;
//         }
//     }
//     return result
// };

function isPrime(num) {
    for (var i = 2; i < num; i++) if (num % i == 0) return false;
    return num >= 2;
}

let testNumbers = [] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 19, 23, 29, 45, 75, -1]

testNumbers.forEach(e => {
    console.log(isPrime(e))
});



