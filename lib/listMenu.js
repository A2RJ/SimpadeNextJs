import { SiAudiomack } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";

const listMenu = [
  {
    name: "Dashboard",
    link: "/",
    // as: "dashboard",
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
  {
    name: "Alat Fiskal Elektronik",
    visibility: ["admin", "user"],
    type: "dropdown",
    icon: <SiAudiomack />,
    subMenu: [
      {
        name: "List AFE",
        link: "/simpade/AFE",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Add AFE", // afe_main
        link: "/simpade/AFE/Input",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Produk AFE", // produk_afe
        link: "/simpade/AFE/Produk",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Kategori AFE", // kategori_afe
        link: "/simpade/AFE/Kategori",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Status", // status
        link: "/simpade/AFE/Status",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Status AFE", // afe_status
        link: "/simpade/AFE/StatusAFE",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
    ],
  },
  {
    name: "Outlet",
    visibility: ["admin", "user"],
    type: "dropdown",
    icon: <SiAudiomack />,
    subMenu: [
      {
        name: "List Outlet",
        link: "/simpade/outlet",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Add Outlet", // outlet_main
        link: "/simpade/outlet/Input",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "AFE Outlet",
        link: "/simpade/outlet/AFE",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Status Outlet",
        link: "/simpade/outlet/Status",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
    ],
  },
  {
    name: "Wajib Pajak",
    visibility: ["admin", "user"],
    type: "dropdown",
    icon: <SiAudiomack />,
    subMenu: [
      {
        name: "List Wajib Pajak",
        link: "/simpade/wajib-pajak",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Add Wajib Pajak",
        link: "/simpade/wajib-pajak/Input",
        visibility: ["admin", "user"],
        icon: <SiAudiomack />,
      },
      {
        name: "Kategori Wajib Pajak",
        link: "/simpade/wajib-pajak/Kategori",
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
