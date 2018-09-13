const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    // Possible values for mode are: none, development or production(default)
    mode: "none",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "src/dist"),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            port: 3000,
            files: ["./src/*"],
            tunnel: "heider",
            server: {
                baseDir: ["./src"]
            }
        })
    ]
};
