const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {   
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./images/[hash].[ext]"
                        }
                    }
                ]

            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: isProduction ? MiniCssExtractPlugin.loader : "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                    
                ]
            }
        ]
    },
    plugins: isProduction ? [new MiniCssExtractPlugin()] : []
}