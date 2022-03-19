const { HttpApi } = require('@cogears/http-client')
const decompress = require('decompress');

const url = 'https://github.com/cogears/vue3-ssr/archive/refs/heads/main.zip'

async function run(name) {
    console.info('下载模板：', url, '...')
    let buffer = await new HttpApi().get(url)
    console.info('解压到', name, '...')
    await decompress(buffer, name, { strip: 1 })
    console.info('部署完毕，可以继续下一步：\n')
    console.info('    cd', name)
    console.info('    npm i')
    console.info('    npm run dev')
    console.info('\n\n')
}

module.exports = function (name) {
    return new Promise(async (resolve, reject) => {
        try {
            run(name)
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}
