module.exports = {
    baseUrl: process.env.NODE_ENV === "production" ? '' : 'development',
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: [
                {
                    name: 'vux-ui'
                },
                {
                    name: 'less-theme', 
                    path: 'src/styles/theme.less'
                }
            ]
        })
    },
    devServer: {
        port: 8086
    }
}