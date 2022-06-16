import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import Layout from "../components/layout/Layout";

function MyApp( {Component, pageProps}: AppProps ) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
