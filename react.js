const path = require('path');

module.exports = {
    extends: [
        path.join(__dirname, 'index.js'),
        'standard-react'
    ],
    rules: {
        'react/jsx-indent': ['error', 4], // 【强制】jsx中dom层级药按照4 spaces的规范
        'react/jsx-indent-props': 0,
    }
};
