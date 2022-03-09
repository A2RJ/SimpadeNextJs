import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/Home.module.css";
import { Button, Text } from "@mantine/core";
import useAuth from "../lib/useAuth";
import Dashboard from "./simpade/dashboard/dashboard";

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
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) router.push("/dashboard");
  }, []);

  const submit = async () => {
    const data = await login({
      email: "admin@gmail.com",
      password: "11111111",
    });

    console.log(data);
  };

  return (
    <>
      <Dashboard data={data} />

      <Button type="primary" onClick={submit}>
        Primary
      </Button>
      <Text>{isAuthenticated}</Text>
    </>
  );
}
