const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'node',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    externals: [nodeExternals()],
    externalsPresets: { node: true },
    output: {
        clean: true,
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: { name: 'logger', type: 'umd' },
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
    },
};
