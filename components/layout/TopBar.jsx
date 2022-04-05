import Image from "next/image";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltLeft } from "react-icons/bi";

export default function TopBar() {
  return (
    <div className="flex h-16 justify-between border-b-2 pl-3 drop-shadow-xl sm:pl-3 md:border-b-0 md:pl-3">
      <div className="sidebar-toggle flex items-center transition">
        <BiMenuAltLeft className="md:h-13 h-7 w-7" />
        <VscChromeClose className="hidden h-7 w-7" />
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
        <div className="ml-4 hidden border-l-2 px-3 md:block">
          <p className="text-lg font-semibold">John Doe</p>
        </div>
      </div>
    </div>
  );
}
