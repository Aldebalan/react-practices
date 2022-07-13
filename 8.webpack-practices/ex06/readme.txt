ex06:    image 모듈 번들링 하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. Image loader 설정(webpack.config.js)
     output: {
        path: path.resolve('public'),
        filename: 'main .js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },module: {
        rules: [{
            test: /\.(png|gif|jpe?g|svg|ico|toff?|bmp)$/i,
            type: 'asset/resource'
        }]
    }

3. 개발 서버 실행
[ex06]$ npm start