/*remove. This function generates a new list by removing all instances of a specified element from a given list.
var list=[1,2,3,4,5,1,1,2];
remove(list,1) => [2,3,4,5,2]
remove(list,2) => [1,3,4,5,1,1]
remove(list,0) => [1,2,3,4,5,1,1,2]
*/
//SOLVED
function remove(givenList, toRemove){ 
    for(i = 0; i<givenList.length;i++){
        if(givenList[i]===toRemove){
            givenList.splice(i, toRemove);
            i--;
        }
    }return givenList;   
}
console.log(remove([1,2,3,4,5,1,1,2], 1));