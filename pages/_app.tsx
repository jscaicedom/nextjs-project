import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import Layout from "../components/layout/Layout";
import { ReviewsContextProvider } from '../store/reviews-context';

function MyApp( {Component, pageProps}: AppProps ) {
  return (
    <ReviewsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReviewsContextProvider>
  );
}

export default MyApp;
