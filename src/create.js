module.exports = function (name) {
    console.info('start create', name, 'project ...')
    return new Promise(resolve => {
        setTimeout(() => {
            console.info('mission comlete.')
            resolve()
        }, 3000);
    })

}