import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'styles/global.css';
import { useState } from 'react';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	require('../mocks/msw');
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<div suppressHydrationWarning>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
			</Hydrate>
		</QueryClientProvider>
	);
};

export default App;
