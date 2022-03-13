const proxy = {
    dev: {
        '/api': {
            target: 'http://localhost:3000',
            // target: 'http://www.hblyan.com:8083',

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