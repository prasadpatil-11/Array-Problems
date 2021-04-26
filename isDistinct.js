/*isDistinct. This function determines if there is only one instance of every element in a given list.
var list=[1,2,3]
isDistinct(list) => true
var list[1,2,3,1]
isDistinct(list) => false*/

//SOLVED
function isDistinct(givenList){
    var originalGivenList = givenList;
    for (i = 0; i<givenList.length; i++){
            for (j = i+1; j<originalGivenList.length;j++){
                if(givenList[i]==originalGivenList[j]){
                return false;
            }
        }
    }return true;
}
console.log(isDistinct([1,2,3,4,5]));