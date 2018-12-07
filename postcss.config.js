module.exports = {
    plugins: {
        "autoprefixer": {}, // 自动浏览器前缀
        "postcss-import": {}, // 这个插件让你很轻易的使用本地文件、node_modules或者web_modules的文件。这个插件配合postcss-url让你引入文件变得更轻松
        "postcss-url": {}, // 处理文件，比如图片文件、字体文件等引用路径的处理
        "cssnano": {
            "cssnano-preset-advanced": {
                "autoprefixer": false, // 重复调用
                "zindex": false // 启用了这个插件，z-index的值就会重置为1,天坑
            }
        },
        "postcss-preset-env": {
            "autoprefixer": false // 重复调用
        },
        "postcss-px-to-viewport": {
            // (Number) The width of the viewport. 
            // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            "viewportWidth": 750,

            // (Number) The height of the viewport. 
            // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            "viewportHeight": 1334,

            // (Number) The decimal numbers to allow the REM units to grow to. 
            // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            "unitPrecision": 3,

            // (String) Expected units. 指定需要转换成的视窗单位，建议使用vw
            "viewportUnit": "vw",

            // (Array) The selectors to ignore and leave as px. 
            // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 .hairlines一般用于设置border-width:0.5px的元素中
            "selectorBlackList": [".ignore", ".hairlines"],

            // (Number) Set the minimum pixel value to replace.
            // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            "minPixelValue": 1,

            // (Boolean) Allow px to be converted in media queries. 
            // 允许在媒体查询中转换`px`
            "mediaQuery": false

            /**
             * 哪些地方可以使用vw来适配我们的页面?
             * 容器适配，可以使用vw
             * 文本的适配，可以使用vw
             * 大于1px的边框、圆角、阴影都可以使用vw
             * 内距和外距，可以使用vw   
             */
        },
        "postcss-viewport-units": {
            filterRule: rule => !rule.selector.includes(':before') && !rule.selector.includes(':after')
        }, // 给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作
        "postcss-aspect-ratio-mini": {}, // 处理元素容器宽高比,使用方法 => https://www.w3cplus.com/mobile/vw-layout-in-vue.html
        "postcss-write-svg": { // 用来处理移动端1px的解决方案,使用方法 => https://www.w3cplus.com/mobile/vw-layout-in-vue.html
            "utf8": false
        }
    }
}