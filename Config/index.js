const primeNum = require("../lib/prime");
! function() {
    let preTime = new Date()
    primeNum.generatePrimeMapUnderNumber(1000000)
    console.log(new Date() - preTime)
}()


const Util = {
    primeNum,
}

module.exports = Util