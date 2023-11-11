import Head from "next/head";
import "../styles/globals.css";
import { userProvider } from '@auth0/nextjs-auth0'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
