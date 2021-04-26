//isReverse. This function determines if the second list is the reversed version of the first.

//SOLVED

function isReverse(firstList, secondList){
var reversedList = [];
    for (i = firstList.length - 1; i>=0;i--){
        reversedList.push(firstList[i]);
    }
    for (i = 0;i<reversedList.length;i++){
        if(reversedList[i]!=secondList[i]){
            return false;
        }
    }return true;
}

console.log(isReverse([1,2,3],[3,2,1]));