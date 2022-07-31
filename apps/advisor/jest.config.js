module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	transformIgnorePatterns: ['/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates)'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/fileMock.js',
		'\\.(css|sass|scss)$': '<rootDir>/mocks/styleMock.js',
		'^components/(.*)': '<rootDir>\\components\\$1',
	},
};
