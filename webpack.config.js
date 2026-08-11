const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const base = {
    mode: 'production',
    target: 'node',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    externalsPresets: {node: true},
    output: {

        path: path.resolve(__dirname, 'dist'),
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

const cjs = {
    ...base,
    name: 'cjs',
    externals: [nodeExternals()],
    output: {
        ...base.output,
        filename: 'index.js',
        library: {name: 'logger', type: 'umd'},
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

const esm = {
    ...base,
    name: 'esm',
    externals: [nodeExternals({importType: 'module'})],
    experiments: {outputModule: true},
    output: {
        ...base.output,
        filename: 'index.mjs',
        module: true,
        chunkFormat: 'module',
        library: {type: 'module'},
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'ts-loader',
                    options: {
                        instance: 'esm',
                        compilerOptions: {
                            module: 'esnext',
                            moduleResolution: 'node',
                            declaration: false,
                            declarationMap: false,
                        },
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
};

module.exports = [cjs, esm];