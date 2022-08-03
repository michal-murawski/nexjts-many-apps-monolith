import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import { AuthService } from 'api';
import { useRouter } from 'next/router';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Button } from 'components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

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
const top100Films = [
	{ label: 'The Shawshank Redemption', year: 1994 },
	{ label: 'The Godfather', year: 1972 },
	{ label: 'The Godfather: Part II', year: 1974 },
	{ label: 'The Dark Knight', year: 2008 },
	{ label: '12 Angry Men', year: 1957 },
	{ label: "Schindler's List", year: 1993 },
	{ label: 'Pulp Fiction', year: 1994 },
];
export default Home;
function About() {
	return (
		<h1>
			About <Button onClick={() => console.log('click')}>z about spa ziomek</Button>
			<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={top100Films}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Movie" />}
			/>
		</h1>
	);
}

function Root() {
	return <h1>Root</h1>;
}

function App() {
	return <h1>App</h1>;
}
