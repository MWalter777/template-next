const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			},
		});

		return config;
	},
};

module.exports = nextConfig;
