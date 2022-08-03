/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'styles/global.css';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache, theme } from 'styling';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	require('../mocks/msw');
}

const clientSideEmotionCache = createEmotionCache();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: any) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<div suppressHydrationWarning>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
					</Hydrate>
				</QueryClientProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
