import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import getStore from '../store/store';
export default function App({
	Component,
	pageProps
}: AppProps) {
	const store = getStore();
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
