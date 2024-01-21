// 出力は絶対pathで指定しなければいけない為、node.jsのpathモジュールを使用する
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    mode: "development",
    // バンドルするファイルを指定
    entry: './src/index.js',
    output: {
        // バンドルしてmain.jsとして出力
        filename: 'main.js',
        path: outputPath
    },
    // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    // ここではdistディレクトリのindex.htmlにアクセスするよう設定してます
    devServer: {
      hot: true,
      static: {
        directory: path.join(__dirname, "dist"),
      },
    }
}