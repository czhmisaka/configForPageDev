/*
 * @Author: czh
 * @Date: 2021-09-06 15:33:59
 */
const fs = require('fs');



/**
 * @Author: czhmisaka
 * @Date: 2021-08-27 00:17:40
 * @description: 文件单行读取（默认utf-8，txt文件）
 * @param {*} path
 * @param {*} num
 * @return {*}
 */
function readFileRow(path, num = 0) {

}

/**
 * @Author: czhmisaka
 * @Date: 2021-08-27 00:18:48
 * @description: 文件全量读取
 * @param {*} path
 * @return {*}
 */
function readFile(path) {
    var data = ''
    return data
}

const reader = {
    readFile,
    readFileRow
}
module.exports = reader