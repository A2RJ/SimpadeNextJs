import { useRouter } from "next/router";
import axios from "axios";
import "../styles/Home.module.css";
import Login from "../components/form/login";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mantine/core";
import { decremented, incremented } from "../reducer/testing";
import { isLogin } from "../reducer/auth";
import Indonesia from "../lib/indonesia";
import { useEffect } from "react";

export async function getServerSideProps() {
  const { dataKabupaten } = await Indonesia.kabupaten();
  let data = JSON.stringify(dataKabupaten);

  return {
    props: {
      data: data,
    },
  };
}

export default function Home({ data }) {

  console.log(JSON.parse(data));

  return (
    <>
      <Login />
    </>
  );
}
