import ListMenu from "./ListMenu";

export default function SideBar() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="../../index3.html" className="brand-link">
          {/* <img
                src="../../dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
              /> */}
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
  
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/* <img
                    src="../../dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  /> */}
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
  
          <ListMenu />
        </div>
      </aside>
    );
  }