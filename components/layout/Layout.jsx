import { useSelector } from "react-redux";
import Image from "next/image";
import Script from "next/script";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMoney } from "react-icons/md";
import { SiAudiomack, SiPostman, SiSparkpost } from "react-icons/si";
import Head from "next/head";
import SideBar from "./Sidear";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  const menu = [
    {
      name: "Home",
      type: "dropdown",
      icon: <AiOutlineHome />,
    },
    {
      name: "Audience",
      type: "single",
      icon: <SiAudiomack />,
    },
    {
      name: "Post",
      type: "dropdown",
      icon: <SiPostman />,
    },
    {
      name: "Schedule",
      type: "single",
      icon: <SiSparkpost />,
    },
    {
      name: "Income",
      type: "single",
      icon: <MdOutlineMoney />,
    },
  ];

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="flex">
        <SideBar menu={menu} />
        <div className="h-screen w-full">
          <TopBar />
          <div className="content container">{children}</div>
        </div>
      </div>
      <Script src="/pizza.js" />
    </>
  );
}
