/*takeNth. This function returns every nth-element in a list.
var list=[1,2,3,4,5,6];
takeNth(list,2) => [1,3,5];
takeNth(list,3) => [1,4];
*/
//SOLVED
function takeNth(givenList, nthElement){
    var everyNthElement = [];
    for(i = 0; i<givenList.length; i+=nthElement){
        everyNthElement.push(givenList[i]);
    }return everyNthElement;
}
console.log(takeNth([1,2,3,4,5,6,7,8],3))