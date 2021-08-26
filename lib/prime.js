// 生成质数表
// @param：{number} num
function generatePrimeMapUnderNumber(num) {
    let primeTable = [];
    primeTable.length = num;
    primeTable[0] = 1, primeTable[1] = 1;
    for (let i = 2; i <= Math.pow(num - 1, 0.5); ++i)
        if (primeTable[i] != 1)
            for (let j = 2 * i; j < num; j += i)
                primeTable[j] = 1;
    return primeTable
}

const primeNum = {
    generatePrimeMapUnderNumber
}
module.exports = primeNum