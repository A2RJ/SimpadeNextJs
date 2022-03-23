import ListMenu from "./ListMenu";
import Image from "next/image";
import { VscChevronDown } from "react-icons/vsc";

export default function SideBar({ menu }) {
  return (
    <div className="sidebar hidden select-none transition md:block">
      <div className="fixed mt-16 h-screen w-[250px] bg-gray-50 md:relative md:mt-0 md:w-[200px] lg:w-[250px]">
        <div className="flex">
          <div className="mx-auto hidden drop-shadow-xl hover:cursor-pointer md:block">
            <Image
              src="/tailwindcss-logotype.svg"
              alt=""
              width={200}
              height={50}
            />
          </div>
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
  );
}
