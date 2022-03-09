import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "./config";

export default function useAuth() {
  const login = async ({ email, password }) => {
    try {
      const { data, status } = await axios
        .post(apiUrl("/auth/login"), {
          email: email,
          password: password,
        })
        .then((response) => response)
        .catch((error) => error.response);

      Cookies.remove();

      if (status === 200) Cookies.set("token", data.access_token);
      else Cookies.remove("token");

      return { data, status, loading: false };
    } catch (error) {
      return {
        data: {
          message: "Connection refused",
        },
        status: 500,
        loading: false,
      };
    }
  };

  const loggedIn = async (token) => {
    if (token) {
      const { data, status } = await axios
        .get(apiUrl("/auth/me"), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => response)
        .catch((error) => error.response);

      data = data.data;
      return { data, status, loading: false };
    }
  };

  const logout = async () => {
    const logout = axios
      .post(apiUrl("/auth/logout"))
      .then((response) => response.data)
      .catch((error) => error.response.data);

    if (logout.status === 200) {
      router.push("/login");
    }
  };

  const isAuthenticated = Cookies.get("token") ? true : false;
  const token = Cookies.get("token");

  return { isAuthenticated, token, login, loggedIn, logout };
}
