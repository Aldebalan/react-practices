const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),   // 서비스 루트 경로 지정?
        filename: 'assets/js/bundle.js'
    }
}