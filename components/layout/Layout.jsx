import Script from "next/script";
import Head from "next/head";
import SideBar from "./Sidear";
import TopBar from "./TopBar";
import listMenu from "../../lib/listMenu";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="flex">
        <SideBar menu={listMenu} />
        <div className="h-screen w-full">
          <TopBar />
          <div className="content container">{children}</div>
        </div>
      </div>
      <Script src="http://localhost:3000/pizza.js" />
    </>
  );
}
