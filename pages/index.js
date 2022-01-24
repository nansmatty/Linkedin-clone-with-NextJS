import { signOut } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<meta charset='UTF-8' />
				<title>LinkedIn</title>
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Header />
			<main>
				{/* Sidebar */}
				{/* Feed */}
				{/* Widgets */}
			</main>
		</div>
	);
}
