import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    </>
  );
}
