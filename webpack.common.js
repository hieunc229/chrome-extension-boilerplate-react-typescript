const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: path.join(__dirname, "src/popup/index.tsx"),
    content: path.join(__dirname, "src/content.ts"),
    background: path.join(__dirname, "src/background.ts"),
    backgroundStartup: path.join(__dirname, "src/backgroundStartup.ts")
  },
  output: {
    path: path.join(__dirname, "build/js"),
    filename: "[name].js"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "../" }
      ],
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings
          },
          {
            loader: "css-loader" // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // Compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
