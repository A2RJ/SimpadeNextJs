import { SiAudiomack } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";

const listMenu = [
  {
    name: "Dashboard",
    link: "/",
    visibility: [
      "superAdmin",
      "admin",
      "user",
      "petugasLapangan",
      "wajibPajak",
    ],
    type: "single",
    icon: <AiOutlineHome />,
  },
  {
    name: "Pelayanan",
    link: "/simpade/pelayanan",
    visibility: ["admin", "user"],
    type: "dropdown",
    icon: <SiAudiomack />,
    subMenu: [
      {
        name: "kantor pajak",
        link: "/simpade/kantor-pajak/Input",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Wajib pajak",
        link: "/simpade/wajib-pajak/Input",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Petugas lapangan",
        link: "/simpade/petugas-lapangan/Input",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Persetujuan",
        link: "/simpade/persetujuan/Persetujuan",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
    ],
  },
];

const filterByLogin = (listMenu, role) => {
  return listMenu.filter((item) => {
    return item.visibility.includes(role);
  });
};

export default listMenu;
