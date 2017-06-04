let array = [1,2,1];



let findRepeat = array.map(o => {
    return array.filter( el => {
        return o === el ? o : el;
    })
});




console.log(findRepeat);