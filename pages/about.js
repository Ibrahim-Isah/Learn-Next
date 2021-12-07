import Footer from '../components/footer';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Head>
				<title>About me</title>
				<meta
					type='description'
					content='All i wish is to be a good person and righteous and make money'
				/>
			</Head>
			<h1 className='content'>About Page</h1>
		</>
	);
}

About.getLayout = function PageLayout(page) {
	return (
		<>
			{page}
			<Footer />
		</>
	);
};
