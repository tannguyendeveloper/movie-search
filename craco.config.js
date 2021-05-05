const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@apis': path.resolve(__dirname, "src/apis/"),
      '@components': path.resolve(__dirname, "src/components/"),
      '@containers': path.resolve(__dirname, "src/containers/"),
      '@css': path.resolve(__dirname, "src/css/"),
      '@reducers': path.resolve(__dirname, "src/reducers/"),
      '@utils': path.resolve(__dirname, "src/utils/"),
    }
  }
}