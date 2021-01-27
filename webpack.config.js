var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: [
      path.resolve(__dirname, "src/index.js"),
    ],
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },

  externals: {
    jquery: "jQuery",
  },

  optimization: {
    runtimeChunk: false,
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /(node_modules|_node_modules)/,
          chunks: "initial",
          name: "vendor",
          priority: -10,
          enforce: false,
          reuseExistingChunk: false,
        },
      },
    },
  },
};
