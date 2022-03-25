import "./../styles/globals.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { store } from "../store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const componentName = Component.displayName || Component.name || "Component";

  useEffect(() => {}, [componentName]);

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
          {componentName === "Login" ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </MantineProvider>
      </Provider>
    </>
  );
}
