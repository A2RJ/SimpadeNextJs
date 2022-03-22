import "../styles/Home.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import Script from "next/script";
import { AiOutlineHome } from "react-icons/ai";
import { VscChevronDown } from "react-icons/vsc";
import { MdOutlineMoney } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { SiAudiomack, SiPostman, SiSparkpost } from "react-icons/si";

export async function getServerSideProps() {
  return {
    props: {
      data: [],
    },
  };
}

export default function Home({ data, status = false }) {
  const auth = useSelector((state) => state.auth.isAuthenticated);
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
      <div className="flex">
        <div className="sidebar hidden md:block">
          <div className="fixed mt-16 h-screen w-[250px] bg-gray-50 md:relative md:mt-0 md:w-[200px] lg:w-[250px]">
            <div className="mx-auto hidden drop-shadow-xl hover:cursor-pointer md:block">
              <Image
                src="/tailwindcss-logotype.svg"
                alt=""
                width={200}
                height={50}
              />
            </div>
            <ul role="list" className="mt-3 grid gap-2 ">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="group p-2 pr-5 hover:cursor-pointer hover:rounded-sm hover:bg-white hover:text-blue-400"
                >
                  <span
                    className={`${
                      item.type === "dropdown" ? "dropdown-menu" : "single-menu"
                    } flex flex-row items-center space-x-3`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.type === "dropdown" && (
                      <VscChevronDown className="dropdown-icon transition-transform duration-500" />
                    )}
                  </span>
                  {item.type === "dropdown" && (
                    <ul className="dropdown-item-parent ml-2 hidden border-l-2 text-xs text-slate-500">
                      <li className="dropdown-item leading-10 hover:text-blue-400">
                        <span className="pl-5">ICON {item.name}</span>
                      </li>
                      <li className="dropdown-item leading-10 hover:text-blue-400">
                        <span className="pl-5">ICON {item.name}</span>
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-screen w-full">
          <div className="flex h-16 justify-between border-b-2 px-5 drop-shadow-xl md:border-b-0">
            <div className="sidebar-toggle flex items-center hover:cursor-pointer">
              <BiMenuAltLeft className="h-14 w-10" />
            </div>
            <div className="flex items-center hover:cursor-pointer md:hidden">
              <Image
                src="/tailwindcss-logotype.svg"
                alt=""
                width={150}
                height={100}
              />
            </div>
            <div className="flex items-center hover:cursor-pointer">
              <Image
                width={40}
                height={40}
                className="h-8 w-8 rounded-full "
                src="/images/avatars/01.png"
                alt="avatar"
              />
              <div className="ml-4 hidden border-l-2 pl-3 md:block">
                <p className="text-lg font-semibold">John Doe</p>
              </div>
            </div>
          </div>
          <div className="content container">
            <div className="grid grid-flow-col grid-rows-4 gap-4">
              <div>01</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/pizza.js" />
    </>
  );
}
