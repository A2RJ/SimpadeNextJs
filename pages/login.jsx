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
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <Image
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
        Indigo cyan
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        Lime green
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
      >
        Teal blue
      </Button>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
        Orange red
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "grape", to: "pink", deg: 35 }}
      >
        Grape pink
      </Button>
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
