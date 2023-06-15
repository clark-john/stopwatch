import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import path from "path";
import "webpack-dev-server";
import { Configuration } from "webpack";

const mode = (process.env.NODE_ENV || "development") as
	| "development"
	| "production";

const config: Configuration = {
	mode,
	context: __dirname,
	devServer: {
		static: {
			directory: path.resolve(__dirname, "public")
		},
		liveReload: mode === "development",
		hot: mode === "development",
		port: 8000,
		watchFiles: ["src/**/*.ts"]
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		},
		extensions: [".js", ".ts"],
		mainFiles: ["main", "index"]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.ts$/,
				loader: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html"
		}),
		new TerserPlugin({
			parallel: true
		})
	]
};

export default config;
