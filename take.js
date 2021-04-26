/*take. This function returns the first n elements of a list.
var list=[1,2,3,4,5,6];
take(list,4) => [1,2,3,4]*/

//SOLVED
function take(givenList, returnELement){
    var nElements = [];
    for(i = 0; i<returnELement; i++){
        nElements.push(givenList[i]);
    }return nElements;
}
console.log(take([1,2,3,4,5,6], 3))