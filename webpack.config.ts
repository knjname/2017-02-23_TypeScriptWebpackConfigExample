import * as webpack from "webpack"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as path from "path"

export default {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "app.js",
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
} as webpack.Configuration
