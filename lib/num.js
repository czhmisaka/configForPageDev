/*
 * @Author: czh
 * @Date: 2021-09-06 18:00:18
 */

/**
 * @Author: czh
 * @name: isInt
 * @Description:判断是否是整数
 * @Date: 2021-09-06 18:01:33
 * @param {*}
 * @return {*}
 */
const isInt = (num) => {
    return !(num - num.toFixed());
}

const Num = {
    isInt,
}
module.exports = Num