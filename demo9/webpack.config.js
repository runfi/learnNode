var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./entry.js',
    output:{    
        path:path.join(__dirname, '/build'),  
        filename:"bundle.js"
    },
    devServer:{
        inline:true,
        port:3000
    },
    module:{
        rules:[
            {        
                test:/\.js?$/,
                loader:'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        //热加载
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modules: [path.resolve(__dirname,'node_modules')]
    }
}
