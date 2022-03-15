import {
  TextInput,
  Button,
  Group,
  Box,
  Modal,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import Auth from "../../lib/Auth";

export default function Login() {
  const [opened, setOpened] = useState(false);
  const [formValues, setFormValues] = useState({});
  const theme = useMantineTheme();

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

    setOpened(true);
    setFormValues(data);
  };

  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <Modal
          centered
          overlayOpacity={0.95}
          overlayColor={theme.colors.gray[2]}
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          {JSON.stringify(formValues)}
        </Modal>

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
