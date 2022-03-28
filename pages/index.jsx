import { removeCookies } from "cookies-next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import Auth from "../lib/Auth";

// export async function getServerSideProps() {
//   return {
//     props: {
//       data: [],
//     },
//   };
// }

export default function Home() {
  const router = useRouter();

  const logout = () => {
    removeCookies("token");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <h3>{Auth.token}</h3>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
}
