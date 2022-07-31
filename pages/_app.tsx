import usePersistLocaleCookie from 'modules/hooks/usePersistLocaleCookie';
import type { AppProps } from 'next/app';
import 'styles/index.scss';
import 'styles/swiper.scss';
import 'styles/global.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	usePersistLocaleCookie();

	return (
		<div suppressHydrationWarning>
			<Component {...pageProps} />
		</div>
	);
};

export default App;
