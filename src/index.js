// module.exports = function getZerosCount(number, base) {
//   // your implementation
//
//
//
//     return numberOfZeros;
//
// }

let number = 130;
let base = 116;
//number = number.toString(16);
console.log(number);
let simpleFactors = [];
let powers = [];
makeSimpleFactors(base);
console.log(simpleFactors);

console.log(powers.reverse());



function makeSimpleFactors (base) {
    let devider = 2;
    let basis = base;
    let power = 1;

    while (basis > 1) {

        if ( basis % devider == 0) {
            basis = basis / devider;
            if (simpleFactors.indexOf(devider) >= 0) {
                power++;
            } else {
                simpleFactors.push(devider);
            }
        } else {
            power = 1;
            devider++;
        }
    }
}



// let numberOfZeros = 0;
// for (let n = 1; number > Math.pow(5, n); n++) {
//     numberOfZeros += Math.floor(number / Math.pow(5, n));
// }
// console.log(numberOfZeros)

// let a = 1000;
//
// console.log(a.toString(16));

//http://www.cyberforum.ru/cpp-beginners/thread622004.html
//https://tehnoshell.ru/news/itkpi/marsianskie-faktorialyi/