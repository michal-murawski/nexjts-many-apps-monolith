/* eslint-disable */
const path = require('path');

module.exports = {
	stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		'@storybook/addon-links',
		'@storybook/addon-actions',
		'@storybook/addon-viewport',
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
				transcludeMarkdown: true,
			},
		},
		'@storybook/addon-controls',
		'@storybook/addon-backgrounds',
		'@storybook/addon-toolbars',
		'@storybook/addon-measure',
		'@storybook/addon-outline',
		'@storybook/addon-console',
	],
	features: {
		interactionsDebugger: true, // 👈 Enable playback controls
	},
	webpackFinal: async (config) => {
		config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

		config.resolve.alias = {
			...config.resolve.alias,
			components: path.resolve(__dirname, '../components'),
		};

		config.module.rules.push({
			test: /\.s(a|c)ss$/,
			include: path.resolve(__dirname, '../'),
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: {
							auto: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
						},
					},
				},
				'sass-loader',
			],
		});

		return config;
	},
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
};
