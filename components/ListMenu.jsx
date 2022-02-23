import Link from "next/link";

const listMenu = [
  {
    hakAkses: ["prasimax"],
    namaMenu: "Dashboard",
    route: "/",
    type: "singleMenu",
  },
  // {
  //   hakAkses: ["prasimax"],
  //   namaMenu: "Pelayanan",
  //   type: "chainMenu",
  //   subMenu: [
  //     {
  //       hakAkses: ["prasimax"],
  //       namaMenu: "Pelayanan",
  //       route: "/simpade/pelayanan",
  //       type: "singleMenu",
  //     },
  //     {
  //       hakAkses: ["prasimax"],
  //       namaMenu: "Pelayanan",
  //       route: "/simpade/pelayanan ",
  //       type: "singleMenu",
  //     },
  //   ],
  // },
  {
    hakAkses: ["prasimax"],
    namaMenu: "Pelayanan",
    route: "/simpade/pelayanan/Index",
    type: "singleMenu",
  },
  {
    hakAkses: ["prasimax"],
    namaMenu: "Kantor Pajak",
    route: "/simpade/kantor-pajak/Index",
    type: "singleMenu",
  },
  {
    hakAkses: ["prasimax"],
    namaMenu: "Wajib Pajak",
    route: "/simpade/wajib-pajak/Index",
    type: "singleMenu",
  },
  {
    hakAkses: ["prasimax"],
    namaMenu: "Alat Fiskal Elektronik",
    route: "/simpade/AFE/Index",
    type: "singleMenu",
  },
  {
    hakAkses: ["prasimax"],
    namaMenu: "Pelaporan",
    route: "/simpade/pelaporan/Index",
    type: "singleMenu",
  }
];

export default function ListMenu() {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        {/* <li className="nav-header">MISCELLANEOUS</li> */}
        {listMenu.map((item, index) => {
          if (item.type === "singleMenu") {
            return <SingleMenu key={index} {...item} />;
          } else {
            return <ChainMenu key={index} {...item} />;
          }
        })}
      </ul>
    </nav>
  );
}

function ChainMenu({ namaMenu, subMenu }) {
  return (
    <li className="nav-item">
      <Link href="#">
        <a className="nav-link">{namaMenu}</a>
      </Link>
      <ul className="nav nav-treeview">
        {subMenu.map((item, index) => {
          return <SingleMenu key={index} {...item} />;
        })}
      </ul>
    </li>
  );
}

function SingleMenu({ namaMenu, route }) {
  return (
    <li className="nav-item">
      <Link href={route}>
        <a className="nav-link">{namaMenu}</a>
      </Link>
    </li>
  );
}
