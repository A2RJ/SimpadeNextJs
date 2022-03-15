import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/hopeui/Hopeui.css";
import Layout from "../components/layout/Layout";
import { store } from "../store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>SIMPADE</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1200,
              xl: 1400,
            },
            colorScheme: "light",
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </Provider>
    </>
  );
}
