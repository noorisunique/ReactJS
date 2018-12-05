var path=require('path')
module.exports={
    mode: 'development',
    entry:'./Main.js',
    output:{
        path: path.resolve(__dirname,'/index'),
        filename:'transpiled.js'
    },
    module:{
        rules:[
            {
            test:/\.jsx?$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            query:{
                presets:['es2015','react']
            }
        }
        ]
    }
}