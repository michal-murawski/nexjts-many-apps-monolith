/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['components']); // pass the modules you would like to see transpiled

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: '/app/:any*',
				destination: '/app',
			},
		];
	},
	reactStrictMode: true,
	webpack: (config, options) => {
		// Important: return the modified config!

		if (options.dev) {
			const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

			config.plugins.push(
				new ForkTsCheckerWebpackPlugin({
					eslint: {
						enable: true,
						files: './**/*.{ts,tsx}', // required - same as command `eslint ./src/**/*.{ts,tsx} --ext .ts,.tsx`
						options: {},
					},
				})
			);
		}

		return config;
	},
};

module.exports = withPlugins([withTM, withBundleAnalyzer], nextConfig);
