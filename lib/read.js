/*
 * @Author: czhmisaka
 * @Date: 2021-08-26 23:49:07
 * @FilePath: \czhmisakaBasic\lib\read.js
 */
const fs = require('fs');



/**
 * @Author: czh
 * @name: memorize
 * @Description: 构建缓存
 * @Date: 2021-09-06 21:44:24
 * @param {*} fn
 * @return {*}
 */
const memorize = function (fn) {
    const cache = {} // 存储缓存数据的对象
    return function (...args) { // 这里用到数组的扩展运算符
        const _args = JSON.stringify(args) // 将参数作为cache的key
        return cache[_args] || (cache[_args] = fn.apply(fn, args)) // 如果已经缓存过，直接取值。否则重新计算并且缓存
    }
}

/**
 * @Author: czhmisaka
 * @Date: 2021-08-27 00:18:48
 * @description: 文件全量读取
 * @param {*} path
 * @return {*}
 */
 function _readFile(path = './in.txt', enCode = "utf8") {
    const inputData = fs.readFileSync(path, enCode)
    return inputData
}

const readFile = memorize(_readFile);

/**
 * @Author: czhmisaka
 * @Date: 2021-08-27 00:17:40
 * @description: 文件单行读取（默认utf-8，txt文件）
 * @param {*} path
 * @param {*} num
 * @return {*} Array
 */
function readFileRow(path = './in.txt', num = 0, splitCode = "\n", enCode = "utf8") {
    const inputData = readFile(path);
    return inputData.split(splitCode, enCode)[num];
}


const reader = {
    readFile,
    readFileRow,
}
module.exports = reader