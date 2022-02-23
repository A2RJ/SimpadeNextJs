import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import "/styles/adminlte.min.css";
import Topbar from "./components/topbar";
import SideBar from "./components/sidebar";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AdminLTE 3 | Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <Topbar />
        <SideBar />

        <Component {...pageProps} />
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.2.0
          </div>
          <strong>
            Copyright &copy; 2014-2021{" "}
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
        <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>

      <Script src="/static/jquery.min.js"></Script>
      <Script src="/static/bootstrap.bundle.min.js"></Script>
      <Script src="/static/adminlte.min.js"></Script>
      <Script src="/static/demo.js"></Script>
    </>
  );
}




