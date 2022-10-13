import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../components/Home/HomePage';


const Index: NextPage = () => {

	return (
		<>
			<Head>
				<title>New Shoe</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
		
				<HomePage />
		
		</>
	);
};

export default Index
