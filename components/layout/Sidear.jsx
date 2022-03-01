import ListMenu from "./ListMenu";

export default function SideBar() {
  return (
    <aside className="sidebar sidebar-default navs-rounded-all">
      <div className="sidebar-header d-flex align-items-center justify-content-start">
        <a href="../dashboard/index.html" className="navbar-brand">
          {/*Logo start*/}
          <svg
            width={30}
            className=""
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-0.757324"
              y="19.2427"
              width={28}
              height={4}
              rx={2}
              transform="rotate(-45 -0.757324 19.2427)"
              fill="currentColor"
            />
            <rect
              x="7.72803"
              y="27.728"
              width={28}
              height={4}
              rx={2}
              transform="rotate(-45 7.72803 27.728)"
              fill="currentColor"
            />
            <rect
              x="10.5366"
              y="16.3945"
              width={16}
              height={4}
              rx={2}
              transform="rotate(45 10.5366 16.3945)"
              fill="currentColor"
            />
            <rect
              x="10.5562"
              y="-0.556152"
              width={28}
              height={4}
              rx={2}
              transform="rotate(45 10.5562 -0.556152)"
              fill="currentColor"
            />
          </svg>
          {/*logo End*/}
          <h4 className="logo-title">SIMPADE</h4>
        </a>
        <div
          className="sidebar-toggle"
          data-toggle="sidebar"
          data-active="true"
        >
          <i className="icon">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="sidebar-body pt-0 data-scrollbar">
        <div className="sidebar-list">
          {/* Sidebar Menu Start */}
          <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
            <li className="nav-item static-item">
              <a
                className="nav-link static-item disabled"
                href="#"
                tabIndex={-1}
              >
                <span className="default-icon">Home</span>
                <span className="mini-icon">-</span>
              </a>
            </li>
            
            <ListMenu />
          </ul>
          {/* Sidebar Menu End */}
        </div>
      </div>
      <div className="sidebar-footer" />
    </aside>
  );
}
