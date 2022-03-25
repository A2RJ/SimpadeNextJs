import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../lib/Auth";
import { decremented, incremented } from "../reducer/testing";
import { useRouter } from "next/router";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
    </>
  );
}
