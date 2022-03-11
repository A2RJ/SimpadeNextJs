import Link from "next/link";
import useAuth from "../../lib/useAuth";

export default function ListMenu() {
  const { user } = useAuth();
  const menu = [
    {
      name: "Dashboard",
      type: "single",
      link: "/",
      visibility: ["admin", "user"],
    },
    {
      name: "Pelayanan",
      type: "parent",
      visibility: ["admin", "user"],
      slug: "#pelayanan",
      children: [
        {
          name: "Kantor Pajak",
          link: "/simpade/kantor-pajak/Input",
        },
        {
          name: "Wajib Pajak",
          link: "/simpade/wajib-pajak/Input",
        },
        {
          name: "Petugas Lapangan",
          link: "/simpade/petugas-lapangan/Input",
        },
        {
          name: "Persetujuan",
          link: "/simpade/persetujuan/Persetujuan",
        },
      ],
    },
  ];

  // menu = menu.filter((item) => {
  //   if (item.visibility.includes(user.role)) {
  //     return item;
  //   }
  // });

  return (
    <>
      {menu.map((item, index) => {
        if (item.type === "parent") {
          return <ParentMenu key={index} {...item} />;
        } else if (item.type === "single") {
          return <SingleMenu key={index} {...item} />;
        }
      })}
    </>
  );
}

function SingleMenu({ name, link }) {
  return (
    <li className="nav-item">
      <Link href={link}>
        <a
          className={"nav-link" + (name === "Dashboard" ? " active" : "")}
          aria-current="page"
        >
          <i className="icon">
            <svg
              width={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                fill="currentColor"
              />
            </svg>
          </i>
          <span className="item-name">{name}</span>
        </a>
      </Link>
    </li>
  );
}

function ParentMenu({ name, slug, children }) {
  return (
    <li className="nav-item">
      <Link href={slug}>
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebar-widget"
        >
          <i className="icon">
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z"
                fill="currentColor"
              ></path>
              <path
                d="M15.4303 11.5887L14.2513 12.7367L14.5303 14.3597C14.5783 14.6407 14.4653 14.9177 14.2343 15.0837C14.0053 15.2517 13.7063 15.2727 13.4543 15.1387L11.9993 14.3737L10.5413 15.1397C10.4333 15.1967 10.3153 15.2267 10.1983 15.2267C10.0453 15.2267 9.89434 15.1787 9.76434 15.0847C9.53434 14.9177 9.42134 14.6407 9.46934 14.3597L9.74734 12.7367L8.56834 11.5887C8.36434 11.3907 8.29334 11.0997 8.38134 10.8287C8.47034 10.5587 8.70034 10.3667 8.98134 10.3267L10.6073 10.0897L11.3363 8.61268C11.4633 8.35868 11.7173 8.20068 11.9993 8.20068H12.0013C12.2843 8.20168 12.5383 8.35968 12.6633 8.61368L13.3923 10.0897L15.0213 10.3277C15.2993 10.3667 15.5293 10.5587 15.6173 10.8287C15.7063 11.0997 15.6353 11.3907 15.4303 11.5887Z"
                fill="currentColor"
              ></path>
            </svg>
          </i>
          <span className="item-name">{name}</span>
          <i className="right-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </i>
        </a>
      </Link>
      <ul
        className="sub-nav collapse"
        id={slug.substring(1)}
        data-bs-parent="#sidebar-menu"
      >
        {children.map((child, index) => {
          return <ChildMenu key={index} {...child} />;
        })}
      </ul>
    </li>
  );
}

function ChildMenu({ name, link }) {
  return (
    <li className="nav-item">
      <Link href={link}>
        <a className="nav-link">
          <i className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g>
                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
              </g>
            </svg>
          </i>
          <i className="sidenav-mini-icon"> W </i>
          <span className="item-name">{name}</span>
        </a>
      </Link>
    </li>
  );
}
