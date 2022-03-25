import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMoney } from "react-icons/md";
import { SiAudiomack, SiPostman, SiSparkpost } from "react-icons/si";

const listMenu = [
  {
    name: "Dashboard",
    link: "/",
    type: "single",
    visibility: ["*"],
    icon: <AiOutlineHome />,
  },
  {
    name: "Menu test",
    link: "/",
    visibility: ["admin", "user"],
    type: "dropdown",
    icon: <AiOutlineHome />,
  },
  {
    name: "Input kantor pajak",
    link: "/simpade/kantor-pajak/Input",
    visibility: ["admin", "user"],
    type: "single",
    icon: <SiAudiomack />,
  },
  {
    name: "Pelayanan",
    link: "/simpade/pelayanan",
    visibility: ["admin", "user"],
    type: "single",
    icon: <SiAudiomack />,
  },
  {
    name: "Post",
    link: "/",
    visibility: ["admin", "user"],
    link: "/",
    visibility: ["admin", "user"],
    type: "dropdown",
    icon: <SiPostman />,
  },
  {
    name: "Schedule",
    link: "/",
    visibility: ["admin", "user"],
    type: "single",
    icon: <SiSparkpost />,
  },
  {
    name: "Income",
    link: "/",
    visibility: ["admin", "user"],
    type: "single",
    icon: <MdOutlineMoney />,
  },
];

export default listMenu;
