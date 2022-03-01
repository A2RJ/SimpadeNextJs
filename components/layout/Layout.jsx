import SideBar from "./Sidear";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  return (
    <>
      <SideBar />
      <main className="main-content">
        <div className="position-relative iq-banner">
          <TopBar />
          {children}
        </div>
        <div className="conatiner-fluid content-inner mt-n5 py-0"></div>
      </main>
    </>
  );
}
