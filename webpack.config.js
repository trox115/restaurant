const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};

const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  encoding: "utf-8",
  singleQuote: true,
  extensions: [".js", ".ts"],
  plugins: [new PrettierPlugin()]
};
