import type { NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
	return (
		<>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/app">App</Link>
		</>
	);
};

export default Home;
