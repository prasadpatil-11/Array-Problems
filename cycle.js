
function cycle(givenList, numberOfCycles){
    var cycledList = [];
    var indexRequired = 0;
    for(i = 0; i<numberOfCycles ; i++){
        cycledList.push((givenList[indexRequired]));
        indexRequired+=1;
        if(indexRequired == 2){
            indexRequired = 0;
        }
       
    }return cycledList;
}
console.log(cycle([1,2], 5));