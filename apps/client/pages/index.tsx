import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import { AuthService } from 'api';
import { useRouter } from 'next/router';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Button } from 'components';
const Home: NextPage = () => {
	const authQuery = useQuery(['auth'], AuthService.getLoggedUser, {});
	const nextRouter = useRouter();
	if (typeof window === 'undefined') {
		return null;
	}

	if (authQuery.isLoading) {
		return <div>Loading...</div>;
	}

	if (authQuery.isFetched && !authQuery.data) {
		AuthService.logout(nextRouter);
	}

	return (
		<BrowserRouter>
			<h1>Inside App!</h1>
			<Link to="/about">About SPA</Link>
			<Link to="/">Home SPA</Link>
			<Link to="/app">App in app SPA</Link>
			<Routes>
				<Route path="about" element={<About />} />
				<Route path="/" element={<Root />} />
				<Route path="app" element={<App />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Home;
function About() {
	return (
		<h1>
			About <Button onClick={() => console.log('click')}>z about spa ziomek</Button>
		</h1>
	);
}

function Root() {
	return <h1>Root</h1>;
}

function App() {
	return <h1>App</h1>;
}
