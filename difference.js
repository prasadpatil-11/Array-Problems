/*Difference between two lists
list1 = [1,2,3]
list2 = [1,2]
difference(list1,list2) => [3]*/
//SOLVED
function difference(biggerList, smallerList){
    for(let i = 0; i<biggerList.length; i++){
        if(biggerList[i] != smallerList[i]){
            result = console.log(biggerList[i]);
        }else{
            result = true;
        }  
    }
}


difference([1,2,3],[1,2]);