let rps = (p1, p2) => {
    // p1 = p1.toLowerCase();
    // p2 = p2.toLowerCase();
    if (p1 === p2) return 'Draw!';
    if (p1 == 'rock' && p2 == 'paper') return 'Player 2 wins';
    if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 wins';
    if (p1 == 'paper' && p2 == 'scissors') return 'Player 2 wins';
    if (p1 == 'paper' && p2 == 'rock') return 'Player 1 wins';
    if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 wins';
    if (p1 == 'scissors' && p2 == 'rock') return 'Player 2 wins';
};

console.log('paper v paper : ' + rps('paper', 'paper'));
console.log('rock v rock : ' + rps('rock', 'rock'));
console.log('scissors v scissors : ' + rps('scissors', 'scissors'));


console.log('rock v paper : ' + rps('rock', 'paper'));
console.log('rock v scissors : ' + rps('rock', 'scissors'));

console.log('paper v scissors : ' + rps('paper', 'scissors'));
console.log('paper v rock : ' + rps('paper', 'rock'));

console.log('scissors v rock : ' + rps('scissors', 'rock'));
console.log('scissors v paper : ' + rps('scissors', 'paper'));



