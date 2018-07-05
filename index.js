module.exports = {
    root: true,

    parser: 'babel-eslint',

    env: {
        es6: true,
        browser: true,
        node: true
    },

    extends: [
        'eslint:recommended',
        'standard'
    ],

    rules: {

        'indent': ['error', 4],
        'semi': ['error', 'always'], // 【强制】分号结尾
        'space-before-function-paren': ['error', 'never'], // 【强制】function左扩号前不加空格
        'no-console': 0, // 【无要求】对是否有console无要求。
        'comma-dangle': 0, // 【无要求】对末尾是否能有逗号无要求。
        'no-useless-constructor': 0,
        'import/no-webpack-loader-syntax': 0,
        'no-extend-native': 0, // 可扩展原生类型
        'camelcase': 0, // 可以不是驼峰

    }
};
