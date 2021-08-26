/**
 * @Author: czhmisaka
 * @Date: 2021-08-27 00:11:42
 * @description: 生成质数表
 * @param {*} num<number>
 * @return {*} primeTable<list>
 */
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

/**
 * @Author: czhmisaka
 * @Date: 2021-08-27 00:15:05
 * @description: 质数检查函数
 * @param {*} num
 * @return {*}
 */
function checkPrime(num) {
    for (let i = 2; i < Math.pow(num, 0.5) + 1; i++)
        if (num % i == 0)
            return false;
    return true
}

const primeNum = {
    checkPrime,
    generatePrimeMapUnderNumber
}
module.exports = primeNum