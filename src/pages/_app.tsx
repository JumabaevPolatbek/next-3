import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Providers from '../redux/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
export default function App({
	Component,
	pageProps,
}: AppProps) {
	return (
		<Providers>
			<ToastContainer />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Providers>
	);
}
