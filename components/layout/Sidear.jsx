import Link from "next/link";
import Image from "next/image";
import { VscChevronDown } from "react-icons/vsc";

export default function SideBar({ menu }) {
  return (
    <div className="sidebar z-50 hidden select-none transition md:block">
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
              className="md:group p-2 pr-5 md:hover:cursor-pointer md:hover:rounded-sm md:hover:bg-white md:hover:text-blue-400"
            >
              {item.type === "dropdown" ? (
                <>
                  <span className="dropdown-menu flex flex-row items-center space-x-3">
                    {item.icon}
                    <span>{item.name}</span>
                    {item.type === "dropdown" && (
                      <VscChevronDown className="dropdown-icon transition-transform duration-500" />
                    )}
                  </span>
                  <ul className="dropdown-item-parent ml-2 hidden border-l-2 text-xs text-slate-500">
                    {item.subMenu.map((item) => (
                      <li
                        key={item.link}
                        className="dropdown-item leading-10 hover:text-blue-400"
                      >
                        <Link href={item.link} passHref>
                          {/* as={item.as} */}
                          <span className="single-menud flex flex-row items-center space-x-3">
                            {item.icon}
                            <span>{item.name}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.link} passHref>
                  <span className="single-menu flex flex-row items-center space-x-3">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
