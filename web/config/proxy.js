const proxy = {
    dev: {
        '/api': {
            target: 'http://localhost:3100',
            // target: 'http://8.142.15.149:3100',

            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
    it: {

    },
    uit: {
        '/api': {
            target: 'http://yantest.hblyan.com:8083',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}


module.exports = proxy;