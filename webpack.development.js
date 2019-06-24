const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    
    module: {
        rules: [
            
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                    
                ]
            },
            {   
                test: /\.(jpg|png|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./images/[name].[hash].[ext]"
                        }
                    }
                ]

            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html"
        }),

        
    ]
    
}