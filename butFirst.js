//SOLVED
//. butFirst. This function returns all but the first element of the list.
//var list=[1,2,3]
//butFirst(list) => [2,3]
//SOLVED
function butFirst(givenList){
var exceptFirst = [];
    for(i = 1; i<givenList.length; i++){
        exceptFirst.push(givenList[i]);
    }return exceptFirst;
}
console.log(butFirst([1,2,3]));