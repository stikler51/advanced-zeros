module.exports = function getZerosCount(number, base) {

    let numberOfZeros = 0;
    let simpleFactors = [];
    let powers = [];
    let numberOfEntries = [];
    makeSimpleFactors(base);

    for (let i = 0; i < simpleFactors.length; i++) {

        for (let n = 1; number > Math.pow(simpleFactors[i], n); n++) {
            numberOfZeros += Math.floor(number / Math.pow(simpleFactors[i], n));
        }

        numberOfEntries.push(Math.floor(numberOfZeros / powers[i]));
        numberOfZeros = 0;
    }

    let min = numberOfEntries[0];
    for (let i = 0; i < numberOfEntries.length; i++) {
        if (min >= numberOfEntries[i]) {
            min = numberOfEntries[i];
        } else {
            continue;
        }
    }

    return min;

    function makeSimpleFactors (base) {
        let devider = 2;
        let basis = base;

        while (basis > 1) {

            if ( basis % devider == 0) {
                basis = basis / devider;
                simpleFactors.push(devider);
            } else {
                devider++;
            }
        }

        for (let i = 0; i < simpleFactors.length; i++) {
            for (let j = 0; j < simpleFactors.length; j++) {
                if (i == j) {
                    powers[i] = 1;
                    continue;
                }
                if (simpleFactors[i] == simpleFactors[j]){
                    powers[i]++;
                    simpleFactors.splice(j, 1);
                    j--;
                }
            }
        }
    }
};
