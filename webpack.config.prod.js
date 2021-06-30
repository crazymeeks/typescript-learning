const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // tells webpack that there will be generated source map already
    // which should extract and basically wire up correctly to the bundle
    // it generates.
    // @see tsconfig.js -> sourceMap key
    // devtool: 'none',
    // Tell webpack what to do to typescript files
    module: {
        rules: [
            {
                test: /\.ts$/, // tell webpack that you wanna check for files that ends with .ts
                use: 'ts-loader', // then tell webpack what to do to that files(.ts)
                exclude: /node_modules/
            }
        ]
    },
    // tell webpack what file extensions it adds to the import(import * from 'example/app.ts')
    resolve: {
        extensions: ['.ts', '.js'],
    },
    // Extra libraries
    plugins: [
        // Tell webpack to clean everything in ouput path before writing in there.
        new CleanPlugin.CleanWebpackPlugin()
    ]
};