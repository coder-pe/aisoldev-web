import '../app/globals.css';
import { AppProps } from 'next/app';
import RootLayout from '../app/layout'; // Importa el layout común

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;

