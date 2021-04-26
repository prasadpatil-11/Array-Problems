//SOLVED
function isSameSet(firstList, secondList){
    for (i = 0; i<secondList.length; i++){
        for (j=0; j<firstList.length;j++){
            if(firstList[j]==secondList[i]){
                secondList.splice(0, secondList[i]);                
            }
        }
    }
    if(secondList.length == 0){
        return true;
    }
}
console.log(isSameSet([1,2,3,4], [2,1,3]));