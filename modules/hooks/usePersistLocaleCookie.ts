import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const usePersistLocaleCookie = () => {
	const { locale, defaultLocale } = useRouter();
	const [cookies, setCookie] = useCookies(['NEXT_LOCALE']);
	const persistLocaleCookie = () => {
		if (locale !== defaultLocale) {
			setCookie('NEXT_LOCALE', locale, {
				path: '*',
				maxAge: 60 * 60 * 24 * 365, // 1 year
			});
		}
	};
	useEffect(persistLocaleCookie, [locale, defaultLocale, cookies, setCookie]);
};

export default usePersistLocaleCookie;
