const path = require("path");

module.exports = {
  entry: {
    discover: "./src/presentations/flight/discover/discover.component.ts",
    availableflights:
      "./src/presentations/flight/availableflights/availableflights.component.ts",
    register: "./src/presentations/identity/register/register.component.ts",
    notfound: "./src/app/page-not-found/page-not-found.component.ts",
    admin: "./src/presentations/admin/admin-discover/admin-discover.component.ts"
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: "/div/",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ["angular-router-loader", "awesome-typescript-loader"],
      },
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
