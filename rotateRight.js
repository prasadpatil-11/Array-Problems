/*18. rotateRight. This function rotates a list right by a given number. Rotation of a list involves moving the elements to a right and the elements at the end to the front of the list.
var list=[1,2,3,4,5];
rotateRight(list,1) => [5,1,2,3,4]
rotateRight(list,2) => [4,5,1,2,3*/

//SOLVED
function rotateRight(givenList, numberOfRotations){
    for(i = givenList.length - 1; i>=givenList.length-numberOfRotations; i--){
        givenList.unshift(givenList.pop([i]))
    }return givenList;
}
console.log(rotateRight([1,2,3,4,5], 1));