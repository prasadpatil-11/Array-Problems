//SOLVED

function unionOfLists(firstList, secondList){

for (i = 0; i<secondList.length; i++){
    firstList.push(secondList[i]);
}
return firstList;
}
console.log(unionOfLists([1,2,3],[4,5,6]));

//Another method using concat function
//unionOfLists = list1.concat(list2);
//console.log(unionOfLists);
