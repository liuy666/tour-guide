module.exports = {
    baseUrl: process.env.NODE_ENV === "production" ? '' : 'development',
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    devServer: {
        port: 8086
    }
}