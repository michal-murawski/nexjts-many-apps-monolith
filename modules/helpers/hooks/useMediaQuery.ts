import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

// Example:  const isDesktop = useMediaQuery('(min-width: 960px)');
const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);

		if (media.matches !== matches) {
			setMatches(media.matches);
		}

		const listener = debounce(() => {
			setMatches(media.matches);
		}, 500);

		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [matches, query]);

	return matches;
};

export default useMediaQuery;
