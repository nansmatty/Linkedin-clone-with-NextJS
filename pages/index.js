import { getSession, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
	const router = useRouter();
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			// The user is not authenticated, handle it here.
			router.push('/home');
		},
	});

	return (
		<div className='bg-[#f3f2ee] dark:bg-black dark:text:white h-screen overflow-y-screen md:space-y-6'>
			<Head>
				<meta charset='UTF-8' />
				<title>Feed | LinkedIn</title>
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Header />
			<main className='flex justify-center gap-x-5 px-4 sm:px-12'>
				<div className='flex flex-col md:flex-row gap-5'>
					{/* Sidebar */}
					<Sidebar />
					{/* Feed */}
					<Feed />
				</div>
				{/* Widgets */}
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	//Check if the user is Authenticated on the server...
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				permanent: false,
				destination: '/home',
			},
		};
	}

	return {
		props: {
			session,
		},
	};
}
