// 1
function solution (number) {
  let sum = 0;
  for(let i = 0; i < number; i++){
    if(i%3 === 0 || i%5 === 0) sum += i;
  }
  return sum
}
console.log(solution(10));

// =======================================================

// Alternating Case
var text = 'Hello World';

function changeText(string) {
  return string.split('').map(changeLetters).join('');
}

function changeLetters(char) {
  return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
}

console.log(changeText(text));

// =========================================================

// Binary Addition
function addBinary(a, b) {
  return (a+b).toString(2);
}
console.log(addBinary(2,3));

// ==========================================================

// credit card mask
let numbers = '09307496136';

function maskify(num) {
  return num.split('').map((letter, index) => index < (num.length - 4) ? '#' : letter).join('');
}

console.log(maskify(numbers));

// ===========================================================

// look at element and array in a string
const name = 'Mohammad123';

const formatted = name.split('').map((let, idx) => console.log(let, idx));

// ============================================================

// Removing Second Element
let myArray = ['keep', 'remove', 'element', 'quiet', 'programmer', 'mohammad', 'app', 'way'];

function removeSecEle(array) {
  return array.filter((_, idx) => {
    return idx % 2 === 0
  })
}
console.log(removeSecEle(myArray));

// ============================================================

// Sort Array by Length
let myArray = ['Hello', 'World', 'element', 'My', 'programmers', 'mohammad.R', 'app', 'way'];

function sortByLength(array) {
  return array.sort((a, b) => {
    return a.length > b.length ? 1 : -1 ;
  })
}

console.log(sortByLength(myArray));

// =============================================================

// Divisible Numbers

let numbers = [1,2,3,4,5,6,7];
let divisor = 2;
function divisibleBy(numbers, divisor){
  return numbers.filter(num => num % divisor === 0);
}

console.log(divisibleBy(numbers, divisor));

// ===============================================================