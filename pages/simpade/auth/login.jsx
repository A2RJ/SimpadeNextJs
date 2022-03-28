import { Loader, Notification, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import Auth from "../../../lib/Auth";
import { X } from "tabler-icons-react";

export default function Login() {
  const router = useRouter();
  const [errorLogin, setErrorLogin] = useState({
    status: false,
    loading: false,
  });

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value !== "",
    },

    errorMessages: {
      email: "Please enter a valid email",
      password: "Please enter a password",
    },
  });

  const handlesubmit = async (values) => {
    setErrorLogin({
      status: false,
      loading: true,
    });
    const { status, data } = await Auth.login(values);
    if (status === 200) {
      Auth.setCridential("token", data.access_token);
      console.log(Auth.token);
      router.push("/");
    } else {
      setErrorLogin({
        status: true,
        loading: false,
      });
    }
  };

  return (
    <>
      <section className="h-screen w-full bg-gray-100 px-8 py-16 xl:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium uppercase text-blue-500">
                Building Businesses
              </p>
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Changing The Way People Do Business.
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">
                Learn how to engage with your visitors and teach them customers
                and businesses interact.
              </p>
            </div>
            <div className="mt-16 w-full md:w-2/5 md:first-letter:my-auto">
              <div className="relative z-10 h-auto overflow-hidden rounded-lg border-b-2 border-gray-300 bg-white p-8 py-10 px-7 shadow-2xl">
                <h3 className="mb-6 text-center text-2xl font-medium">
                  Sign in to your Account
                </h3>
                {errorLogin.status && (
                  <Notification
                    disallowClose
                    icon={<X size={18} />}
                    color="red"
                  >
                    Invalid email or password
                  </Notification>
                )}
                <form
                  onSubmit={form.onSubmit((values) => handlesubmit(values))}
                >
                  <TextInput
                    required
                    name="email"
                    className="mb-4 block w-full rounded-lg py-3 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Email address"
                    {...form.getInputProps("email")}
                  />
                  <TextInput
                    required
                    name="password"
                    className="mb-4 block w-full rounded-lg py-3 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Password"
                    {...form.getInputProps("password")}
                  />
                  {form.errors.length > 0 && (
                    <div className="text-xs italic text-red-500">
                      {form.errors.map((error) => error)}
                    </div>
                  )}
                  <div className="float-right flex">
                    {errorLogin.loading && (
                      <Loader width={25} className="mr-2" />
                    )}
                    <button
                      type="submit"
                      className="flex rounded-lg border border-transparent border-gray-200 bg-slate-400 px-4 py-3 focus:bg-slate-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
