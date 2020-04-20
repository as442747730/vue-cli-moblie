module.exports = {
    plugins: {
        autoprefixer: {
            browsers: [
                'last 4 versions',
                'ios >= 7',
                'android >= 4.1'
            ]
        },
        'postcss-px2rem-exclude': {
            remUnit: 100,
            exclude: /node_modules|folder_name/i
        }
    }
}
