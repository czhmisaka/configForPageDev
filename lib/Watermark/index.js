/*
 * @Author: czh
 * @Date: 2021-10-13 11:34:22
 */


/**
 * @Author: czh
 * @name: createCanvas 
 * @Description: 创建canvas，提供绘制环境
 * @Date: 2021-10-13 14:11:59
 * @param {*}
 * @return {*}
 */
function createCanvas() {
    if (!document)
        return console.error('No Document', document, window)
    let canvas_el = document.createElement('canvas')
    canvas_el.id = 'watermark_canvas_el'
}


function testConsole() {
    console.log('asd')
}





/**
 * @Author: czh
 * @name: createWatermarkImage
 * @Description: 通过输入的关键字创建水印
 * @Date: 2021-10-13 11:55:46
 * @param {*} keyWord
 * @return {*}
 */
const createWatermarkImage = (keyWord) => {

}

/**
 * @Author: czh
 * @name: replaceBackgroundImage
 * @Description: 替换对应class的background属性为生成后的背景图
 * @Date: 2021-10-13 14:02:56
 * @param {*}
 * @return {*}
 */
const replaceBackgroundImage = () => {

}

/**
 * @Author: czh
 * @name: preventChange
 * @Description: 阻止f12等修改dom的行为
 * @Date: 2021-10-13 14:02:58
 * @param {*}
 * @return {*}
 */
const preventChange = () => {

}

exports = {
    createWatermarkImage,
    replaceBackgroundImage,
    preventChange
}