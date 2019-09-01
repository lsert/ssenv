module.exports = {
    '/api/backend': {                          // 以这个开头的请求都会代理到下面的地址
        target: 'http://127.0.0.1:4000',       // 需要代理到的后端地址
        pathRewrite: { '^/api/backend': '' },
        changeOrigin: true
    }
}