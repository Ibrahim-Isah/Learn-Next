import Footer from '../components/footer';
import Header from '../components/header';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/layout.css';

function MyApp({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}
	return (
		<>
			<Head>
				<title>Isah Page</title>
				<meta type='description' content='doing great things is what i crave' />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
