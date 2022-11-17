import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script type="text/javascript" src="/static/script.js"></script>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
