import { Card, Container } from "@mantine/core";
import Head from "next/head";
import Script from "next/script";
import SideBar from "./Sidear";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SideBar />
      <main
        className="main-content"
        style={{
          backgroundColor: "#dedede",
        }}
      >
        <div className="position-relative iq-banner">
          <TopBar />
          <Card shadow="sm" padding="lg" className="m-1 mt-3" style={{
            minHeight: 'calc(100vh - 80px)',
          }}>
            <Container>{children}</Container>
          </Card>
        </div>
        <div className="conatiner-fluid content-inner mt-n5 py-0"></div>
      </main>

      <Script src="/core/jquery-3.6.0.slim.min.js" />
      <Script src="/core/libs.min.js" />
      <Script src="/core/external.min.js" />
      <Script src="/hope-ui.js" />
    </>
  );
}
