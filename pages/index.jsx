import { useState } from "react";
import { useRouter } from "next/router";
import "../styles/Home.module.css";
import Dashboard from "./simpade/dashboard/dashboard";

export async function getServerSideProps() {
  const data = [];
  // await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => json);
  return {
    props: {
      data: data || [],
    },
  };
}

export default function Home({ data }) {
  const router = useRouter();
  const [userState, setuserState] = useState(false);

  return (
    <>
      <Dashboard data={data} />
    </>
  );
}
