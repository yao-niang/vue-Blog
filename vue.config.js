const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ?
        'https://github.com/yao-niang/vue3-Blog-deploy' : '/',
    devServer: {
        proxy: {
            "/api": {
                target: "http://test.my-site.com",
            },
        },
    }

})