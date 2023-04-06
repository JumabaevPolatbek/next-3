import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
export default function App({ Component, ...rest }: AppProps) {
	const {store}=wrapper.useWrappedStore(rest)
	return (
		<Provider store={store}>
			<Layout>
				<Component {...rest.pageProps} />
			</Layout>
		</Provider>
	);
}

