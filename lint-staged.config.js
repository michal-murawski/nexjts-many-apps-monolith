module.exports = {
	// Type check TypeScript files
	'**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

	// Lint then format TypeScript and JavaScript files
	'**/*.(ts|tsx|js)': (filenames) => [
		`pnpm eslint --cache --fix --max-warnings=0 --no-ignore ${filenames.join(' ')}`,
		`pnpm prettier --write ${filenames.join(' ')}`,
	],

	// Format MarkDown, SCSS, CSS and JSON
	'**/*.(md|json|css|scss)': (filenames) => `pnpm prettier --write ${filenames.join(' ')}`,
};
