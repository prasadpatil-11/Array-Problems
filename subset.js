//SOLVED
/* isSubset. This function should determine whether the second list is a subset of the first.
list1=[1,2,3];
list2=[1,2];
isSubset(list1,list2) => true

list1=[1,2,3];
list2=[1,4]'
isSubset(list1,list2) => false

list1=[1,2,3];
list2=[]'
isSubset(list1,list2) => true */
//SOLVED
function isSubset(firstList, secondList){
    for (i = 0; i<secondList.length; i++){
        for (j=0; j<firstList.length;j++){
            if(firstList[j]==secondList[i]){
                secondList.splice(0, secondList[i]);
            }
        }
    }
    if(secondList.length != 0){
        return false;
    }return true;
}
console.log(isSubset([1,2,3],[1,2]));