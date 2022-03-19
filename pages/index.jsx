import "../styles/Home.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import Script from "next/script";
import Coba from "../components/coba";
import { AiOutlineHome } from "react-icons/ai";
import { VscChevronDown } from "react-icons/vsc";
import { BiMenuAltLeft } from "react-icons/bi";

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
    },
    {
      name: "Audience",
      type: "single",
    },
    {
      name: "Post",
      type: "dropdown",
    },
    {
      name: "Schedule",
      type: "single",
    },
    {
      name: "Income",
      type: "single",
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="sidebar hidden border-r-2 md:block">
          <div className="flex h-screen w-0 grid-cols-2 flex-col items-center bg-gray-50 md:w-[200px] lg:w-[250px]">
            <div className="mx-auto my-8 flex drop-shadow-xl hover:cursor-pointer">
              <Image src="/tailwindcss-logotype.svg" width={200} height={50} />
            </div>
            <ul className="mt-3 grid gap-2">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    item.type === "dropdown" ? "dropdown-menu " : ""
                  } group p-2 pr-5 hover:cursor-pointer hover:rounded-sm hover:bg-white hover:text-blue-400`}
                >
                  <span className="flex flex-row items-center space-x-3">
                    <AiOutlineHome />
                    <span>{item.name}</span>
                    {item.type === "dropdown" ? (
                      <VscChevronDown className="dropdown-icon" />
                    ) : (
                      ""
                    )}
                  </span>
                  {item.type === "dropdown" ? (
                    <ul className="dropdown-item-parent ml-2 hidden border-l-2 text-xs leading-10">
                      <li className="dropdown-item">
                        <span className="pl-5">ICON {item.name}</span>
                      </li>
                      <li className="dropdown-item">
                        <span className="pl-5">ICON {item.name}</span>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-screen w-full">
          <div className="flex h-16 justify-between border-b-2 px-5 drop-shadow-xl md:border-b-0">
            <div className="flex items-center hover:cursor-pointer">
              <BiMenuAltLeft className="w-10 h-14" />
            </div>
            <div className="flex items-center hover:cursor-pointer md:hidden">
              <Image src="/tailwindcss-logotype.svg" width={150} height={100} />
            </div>
            <div className="flex items-center hover:cursor-pointer">
              <img
                className="h-8 w-8 rounded-full "
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="avatar"
              />
              <div className="ml-4 hidden border-l-2 pl-3 md:block">
                <p className="text-lg font-semibold">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/pizza.js" />
    </>
  );
}
