const path = require("path");
module.exports = {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    ],
  },
};
