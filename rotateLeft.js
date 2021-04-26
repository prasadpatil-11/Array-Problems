/*19. rotateLeft. This function rotates a list left by a given number. Rotation of a list involves moving the elements to a left and the elements at the end to the front of the list.
var list=[1,2,3,4,5];
rotateLeft(list,1) => [2,3,4,5,1]
rotateRight(list,2) => [3,4,5,1,2]*/

//SOLVED
function rotateLeft(givenList, numberOfRotations){
    for(i = 0; i<numberOfRotations; i++){
        givenList.push(givenList.shift([i]))
    }return givenList;
}
console.log(rotateLeft([1,2,3,4,5], 1));