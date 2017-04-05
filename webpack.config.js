const webpack = require("webpack");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "public");
const APP_DIR = path.resolve(__dirname, "src");

const config = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        APP_DIR + "/index.js",
    ],
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        // #TODO test build
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loaders: [
                    "react-hot-loader",
                    "babel-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // #TODO CSS postprocessing
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        contentBase: "./public",
    },
};

module.exports = config;