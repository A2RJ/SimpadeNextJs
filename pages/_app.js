import Layout from "../components/layout/Layout";
import "../styles/hopeui/Hopeui.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="/core/jquery-3.6.0.slim.min.js" />
      <Script src="/core/libs.min.js" />
      <Script src="/core/external.min.js" />
      <Script src="/hope-ui.js" />
    </>
  );
}

export default MyApp;
