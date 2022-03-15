import { useRouter } from "next/router";
import axios from "axios";
import "../styles/Home.module.css";
import Dashboard from "./simpade/dashboard/dashboard";
import Login from "../components/form/login";
import Auth from "../lib/Auth";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mantine/core";
import { decremented, incremented } from "../reducer/testing";
import { isLogin } from "../reducer/auth";

export async function getServerSideProps() {
  let data = await axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.data)
    .catch((err) => err);

  return {
    props: {
      data: data || [],
    },
  };
}

export default function Home({ data }) {
  const router = useRouter();
  const testValue = useSelector((state) => state.testingValue.value);
  const tokenFromReducer = useSelector((state) => state.auth);
  const dispacth = useDispatch();
  return (
    <>
      <Button onClick={() => dispacth(incremented())}>incremented</Button>
      {testValue}
      <Button onClick={() => dispacth(decremented())}>decremented</Button>
      <Button onClick={() => dispacth(isLogin())}>Get Token</Button>
      {tokenFromReducer.isAuthenticated}

      <Login />
    </>
  );
}
