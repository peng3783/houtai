const path = require("path");

module.exports = {
	entry : "./www/app/main.js" ,
	output : {
		filename : "bundle.js" ,
		path : path.resolve(__dirname , "./www/dist")
	},
	module : {
		rules : [
			{
				test : /\.js$/ ,
				include : path.resolve(__dirname , "./www/app"),
				loader : "babel-loader",
				options : {
					presets : ["es2015" , "react"],
					plugins : [
                        ["import", {libraryName: "antd", style: "css"}],
                        ["transform-object-rest-spread"]
					]
				}
			},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
		]
	}
}