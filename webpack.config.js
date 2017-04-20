const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");

const BUILD_DIR = path.resolve(__dirname, "public");
const APP_DIR = path.resolve(__dirname, "src");
const PUBLIC_URL = ".";
const TITLE = "Test editor";

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
                test: /\.jsx?$|\.rt$/,
                include: APP_DIR,
                loaders: [
                    "react-hot-loader",
                    "babel-loader",
                ],
            },
            {
                test: /\.rt$/,
                include: APP_DIR,
                use: [
                    {
                        loader: "react-templates-loader",
                        options: {
                            modules: "es6",
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                use: [
                    "style-loader",
                    "css-loader",
                    // #TODO CSS postprocessing
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: APP_DIR,
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
        new HtmlWebpackPlugin(
            {
                "template": BUILD_DIR + "/index.html",
            }),
        new InterpolateHtmlPlugin(
            {
                "PUBLIC_URL": PUBLIC_URL,
                "TITLE": TITLE,
            }),
    ],
    devServer: {
        hot: true,
        contentBase: "./public",
    },
};

module.exports = config;