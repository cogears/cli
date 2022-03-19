const { HttpApi } = require('@cogears/http-client')
const decompress = require('decompress');

const url = 'https://github.com/cogears/vue3-ssr/archive/refs/heads/main.zip'

async function run(name) {
    console.info('下载项目...')
    let buffer = await new HttpApi().get(url)
    console.info('部署项目...')
    await decompress(buffer, name)
    console.info('部署完毕。')
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
