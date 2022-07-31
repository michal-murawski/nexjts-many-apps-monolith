import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'styles/global.css';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<div suppressHydrationWarning>
					<Component {...pageProps} />
				</div>
			</Hydrate>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default App;
