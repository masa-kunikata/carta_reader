module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: './public',
  indexPath: 'index.html',
  devServer: {
    disableHostCheck: true,
    host: '192.168.10.10',
    port: '8080',
    watchOptions: {
      poll: true
    }
  }
}
