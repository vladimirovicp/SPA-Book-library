const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "src"),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
};