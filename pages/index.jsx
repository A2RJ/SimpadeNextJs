import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/Home.module.css";
import { Button, Text } from "@mantine/core";
import useAuth from "../lib/useAuth";
import Dashboard from "./simpade/dashboard/dashboard";
import Cookies from "js-cookie";

export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);
  return {
    props: {
      data: data || [],
    },
  };
}
export default function Home({ data }) {
  const router = useRouter();
  const { login } = useAuth();

  const submit = async () => {
    const data = await login({
      email: "admin@gmail.com",
      password: "11111111",
    });

    console.log(useAuth().isAuthenticated, Cookies.get('user'));
  };

  return (
    <>
      <Dashboard data={data} />

      <Button type="primary" onClick={submit}>
        Primary
      </Button>
      <Text>{useAuth().isAuthenticated ? useAuth().user.nama_wp : 'Belum login'}</Text>
    </>
  );
}
