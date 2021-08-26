function generate(n) {
    var primeTable = []
    primeTable.length = 1000000
    primeTable[0] = 1;
    primeTable[1] = 1;
    for (let i = 2; i <= Math.pow(n - 1, 0.5); ++i) {
        if (primeTable[i] != 1) {
            for (let j = i + i; j < n; j += i) {
                primeTable[j] = 1;
            }
        }
    }
    return primeTable
}
let preTime = new Date()
let primeTable = generate(1000000)
console.log(new Date() - preTime)

let res = []
for (let i = 2; i < 1000000; ++i) {
    if (primeTable[i] != 1) {
        res.push(i);
    }
}
console.log(res)