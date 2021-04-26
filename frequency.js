/*17. frequencyOfElement. This function determines how many times an element occurs in a given list.
var list=[1,2,3,4,1,2,1];
frequencyOfElement(list,1) => 3
frequencyOfElement(list,2) => 2
frequencyOfElement(list,3) => 1
frequencyOfElement(list,5) => 0*/
//SOLVED
function frequencyOfElements(givenList, frequencyOf){
    var frequencyCount = 0;
    for(i = 0; i<givenList.length; i++){
        if(frequencyOf === givenList[i]){
            frequencyCount+=1;
        }
    }return frequencyCount;
}
console.log(frequencyOfElements([1,2,3,4,1,2,1], 3));