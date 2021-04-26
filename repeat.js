/*repeat. This function generates a new list by repeating a given element a specified number of times.
repeat(2,5) => [2,2,2,2,2];
repeat('a',5) => ['a','a','a','a','a'];*/
//SOLVED

function repeat(toRepeat, timesToRepeat){
    var repeatedList = [];
    for (i = 0; i < timesToRepeat; i++){
        repeatedList.push(toRepeat);
    }
    return repeatedList;    
}
console.log(repeat('a' , 5));