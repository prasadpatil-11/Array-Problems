/*Difference between two lists
list1 = [1,2,3]
list2 = [1,2]
difference(list1,list2) => [3]*/
//SOLVED
function difference(firstList, secondList){
    for(let i = 0; i<firstList.length; i++){
        if(firstList[i] != secondList[i]){
            result = console.log(firstList[i]);
        }else{
            result = true;
        }  
    }
}


difference([1,2,3,4],[1,2]);