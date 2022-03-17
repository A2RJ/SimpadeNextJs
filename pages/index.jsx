import "../styles/Home.module.css";
import { useSelector } from "react-redux";

export async function getServerSideProps() {
  return {
    props: {
      data: [],
    },
  };
}

export default function Home({ data, status = false }) {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const menu = [
    "Dashboard 1",
    "Dashboard 2",
    "Dashboard 3",
    "Dashboard 4",
    "Dashboard 5",
  ];
  return (
    <>
      <div className="font-sans">
        <div className="m-0 h-16 w-full border-b">
          <div className="flex h-full items-center justify-between">
            <div className="flex w-[250px] items-center justify-center">
              <span className="text-4xl font-bold text-black hover:cursor-pointer">
                DASH
              </span>
            </div>
            <div className="mr-10 flex items-center">
              <img
                className="h-8 w-8 rounded-full hover:cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="avatar"
              />
              <div className="ml-4 border-l-2 pl-3 hover:cursor-pointer">
                <p className="text-lg font-semibold">John Doe</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen bg-white ">
          <div className="flex w-[300px] justify-center border-r-4 text-sm text-black">
            <ul>
              {menu.map((item, index) => (
                <li className="my-4 " key={index}>
                  <span className="hover:border-l-4 hover:text-blue-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full bg-white">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            cumque. */}
          </div>
        </div>
      </div>
    </>
  );
}
