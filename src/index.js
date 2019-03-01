// module.exports = function getZerosCount(number, base) {
//   // your implementation
//
//
//
//     return numberOfZeros;
//
// }

let number = 1000;
number = number.toString(16);
console.log(number);
let numberOfZeros = 0;
for (let n = 1; number > Math.pow(5, n); n++) {
    numberOfZeros += Math.floor(number / Math.pow(5, n));
}
console.log(numberOfZeros)

// let a = 1000;
//
// console.log(a.toString(16));

//http://www.cyberforum.ru/cpp-beginners/thread622004.html
//https://tehnoshell.ru/news/itkpi/marsianskie-faktorialyi/