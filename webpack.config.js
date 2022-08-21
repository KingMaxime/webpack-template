const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// 	.BundleAnalyzerPlugin;

module.exports = {
	mode: "production",
	entry: {
		bundle: path.resolve(__dirname, "src/index.ts"),
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].[contenthash].js",
		clean: true,
		assetModuleFilename: "assets/[name][ext]",
	},
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Joke Generator",
			filename: "index.html",
			template: path.resolve(__dirname, "src/index.html"),
		}),
	],
};
