/*
 * @Author: czh
 * @Date: 2021-09-06 19:01:11
 */
/**
 * @Author: czh
 * @name: shuffle
 * @Description: 洗牌
 * @Date: 2021-09-06 18:01:33
 * @param {*}
 * @return {*}
 */
function shuffle(arr) {
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        count++;
        let rIndex = Math.floor(Math.random() * (i + 1));
        let temp = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

/**
 * @Author: czh
 * @name: quickSort
 * @Description: 快排
 * @Date: 2021-09-06 19:05:17
 * @param {*} arr
 * @return {*}
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

const sort = {
    shuffle,
    quickSort
}
module.exports = sort