import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/layout.css';
import '../components/navbar.css';
import Provider from 'next-auth/provider';

function MyApp({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}
	return (
		<Provider session={pageProps.session}>
			<Head>
				<title>Isah Page</title>
				<meta type='description' content='doing great things is what i crave' />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</Provider>
		//the provider lets us make use of useSession to determine some things
	);
}

export default MyApp;
