# testOfWebpack
认识webpack的config配置，以及loaders，plugin的使用

## webpack构建项目。
   * 由于index.js是CommentJS规范，所以要转换成浏览器可识别的代码，即webpack生成的bundle.js
   * 利用HtmlWebpackPlugin插件生成html文件
   * loaders
      * style-loader和css-loader将css代码的import依赖合并，并以\<style>形式插入页面。

## 运行
`npm install`
`webpack`
