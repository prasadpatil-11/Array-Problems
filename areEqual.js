//areEqual. This function determines if two lists have the exact same elements in the exact same order.

//SOLVED

function areEqual(firstList, secondList){
    if (firstList.length != secondList.length){ 
        return false;
    }
    else{    
    for(let i = 0; i<firstList.length; i++){
        if(firstList[i] != secondList[i]){
            return false;
        }
        }   
    }return true;
}

console.log(areEqual([1,2,3],[1,4,3]));