module.exports = {
    presets: [
        '@vue/app'
    ]
    // 按需载入vant 需要配置plugins 同时安装babel-plugin-import
    // 注意避免全局与按需同时安装
    // plugins: [
    //     ['import', {
    //         libraryName: 'vant',
    //         libraryDirectory: 'es',
    //         style: true }, 'vant'
    //     ]
    // ]
}
