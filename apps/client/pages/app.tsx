import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LinkNext from 'next/link';
import { Button } from 'components';

export default function AppPage() {
	if (typeof window === 'undefined') {
		return null;
	}
	return (
		<div suppressHydrationWarning>
			<BrowserRouter basename="app">
				<h1>Inside App!</h1>
				<LinkNext href="/">Home next</LinkNext>
				<LinkNext href="/about">About next</LinkNext>
				<LinkNext href="/app">App next</LinkNext>
				<Link to="/about">About SPA</Link>
				<Link to="/">Home SPA</Link>
				<Link to="/app">App in app SPA</Link>
				<Routes>
					<Route path="about" element={<About />} />
					<Route path="/" element={<Root />} />
					<Route path="app" element={<App />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

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
