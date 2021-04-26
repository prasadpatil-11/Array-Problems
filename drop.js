/*rop. This function generates a new list by dropping the first n elements of a list.
var list=[1,2,3,4,5]
drop(list,2) => [3,4,5]*/
//SOLVED

function drop(givenList, todrop){
    var droppedList = [];
    for(let i = todrop; i<givenList.length; i++){
        droppedList.push(givenList[i]);
    }return droppedList;
}
console.log(drop([1,2,3,4,5,6], 3))