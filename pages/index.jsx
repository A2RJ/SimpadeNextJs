import "../styles/Home.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import Script from "next/script";

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
      <div className="font-sans">
        {/* Topbar */}
        <div className="m-0 h-16 w-full border-b">
          <div className="flex h-full items-center justify-between">
            <div className="flex w-[250px] items-center justify-center">
              <Image
                className=""
                src="/tailwindcss-logotype.svg"
                width={200}
                height={100}
              />
            </div>
            <div className="visible mr-10 hidden items-center md:block">
              <div className="flex">
                <img
                  className="h-8 w-8 rounded-full "
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="avatar"
                />
                <div className="ml-4 border-l-2 pl-3 ">
                  <p className="text-lg font-semibold">John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden h-screen w-[300px] justify-center border-r-4 text-sm font-bold sm:block  ">
            <ul className="mt-3">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    item.type === "dropdown" ? "dropdown-menu" : ""
                  } mx-10 my-1 rounded-sm leading-10 text-slate-700 hover:cursor-pointer hover:bg-slate-100 hover:text-slate-900`}
                >
                  <span className="pl-5">
                    ICON {item.name}
                    {item.type === "dropdown" ? "D" : ""}
                    {item.type === "dropdown" ? (
                      <ul className="dropdown-item-parent leading-10 hidden border-l-4 ml-2 text-xs">
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
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Content */}
          <div className="h-screen w-full bg-gray-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            cumque.
          </div>
        </div>
      </div>
      <Script src="/pizza.js" />
    </>
  );
}
