/*butLast. This function returns all but the last element of the list.
var list=[1,2,3]
butLast(list) => [1,2]*/
//SOLVED

function butLast(givenList){
    var exceptLast = [];
        for(i = 0; i<givenList.length-1; i++){
            exceptLast.push(givenList[i]);
        }return exceptLast;
}
console.log(butLast([1,2,3]));