import "./../styles/globals.css";

import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout/Layout";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "..//store/store";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  // const componentName = Component.displayName || Component.name || "Component";

  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {}, [pathname]);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title> SIMPADE </title> <link rel="icon" href="/favicon.ico" />
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
          {pathname !== "/simpade/auth/login" ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </MantineProvider>
      </Provider>
    </>
  );
}
