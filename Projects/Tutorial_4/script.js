//------------------.forEach()----------
let numbers = [1,2,3,4,5];

numbers.forEach(triple);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}

function display(element){
    console.log(element)
}
//---------------------------------

const nums = [1,2,3,4,5,6];
const squares = nums.map(sqa); 

console.log(squares)

function square(element){
    return Math.pow(element,2)
}

