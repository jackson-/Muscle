var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');
var config = {
	entry: APP_DIR + '/index.jsx',
	output:{
		path:BUILD_DIR,
		filename:'bundle.js'
	},
	module:{
		loaders: [
			{
				test:/\.jsx?/,
				include:APP_DIR ,
				loader:'babel',
				query:
	      {
	        presets:['es2015','react']
	      }
			},
			{
			  test: /\.css$/,
			  // include: APP_DIR,
				loader: 'style-loader!css-loader'
			},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    	}
		]
	}
};

module.exports = config;
