module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/, // Handle .js and .jsx files
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets for React
					},
				},
			},
		],
	},
	resolve: {
		fallback: {
			fs: false,          // Electron provides fs, so no need for polyfill
			path: require.resolve('path-browserify'), // Install path-browserify if needed
		},
	},
};