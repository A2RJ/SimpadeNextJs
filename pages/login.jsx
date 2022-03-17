import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../lib/Auth";
import { decremented, incremented } from "../reducer/testing";
import { useRouter } from "next/router";

export default function Login() {
  const state = useSelector((state) => state.testing.value);
  const dispacth = useDispatch();
  const route = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value !== "" ? null : "Type password"),
    },
  });

  const formValue = async (values) => {
    const { data, status } = await Auth.login({
      email: values.email,
      password: values.password,
    });

    console.log("Status Login", data, status);
    if (status) {
      route.push("/");
    }
  };

  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto" my="auto">
        <Button variant="primary" onClick={() => dispacth(incremented())}>
          Tambah
        </Button>
        <br />
        {state}
        <br />
        <Button variant="primary" onClick={() => dispacth(decremented())}>
          Kurang
        </Button>

        <form onSubmit={form.onSubmit((values) => formValue(values))}>
          <TextInput
            required
            id="email"
            label="Email"
            placeholder="your@email.com"
            autoComplete="email"
            {...form.getInputProps("email")}
          />

          <TextInput
            required
            id="password"
            label="Password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
            {...form.getInputProps("password")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
