const path = require('path');

const {
    NODE_ENV = 'development'
} = process.env;

const nodeExternals = require('webpack-node-externals');
// const WebpackShellPlugin = require('webpack-shell-plugin');

// TODO
// Continue the setup https://medium.com/the-andela-way/how-to-set-up-an-express-api-using-webpack-and-typescript-69d18c8c4f52


module.exports = {
    mode: NODE_ENV,
    entry: './src/app.ts',
    target: 'node',
    watch: NODE_ENV === 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    // tells webpack that there will be generated source map already
    // which should extract and basically wire up correctly to the bundle
    // it generates.
    // @see tsconfig.js -> sourceMap key
    devtool: 'inline-source-map',
    // Tell webpack what to do to typescript files
    module: {
        rules: [
            {
                test: /\.ts$/, // tell webpack that you wanna check for files that ends with .ts
                use: 'ts-loader', // then tell webpack what to do to that files(.ts)
                exclude: [/node_modules/, /tests/]
            }
        ]
    },
    // tell webpack what file extensions it adds to the import(import * from 'example/app.ts')
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [ nodeExternals() ],
    // plugins: [
    //     new WebpackShellPlugin({
    //         onBuildEnd: ['yarn run:dev']
    //     }),
    // ]
};