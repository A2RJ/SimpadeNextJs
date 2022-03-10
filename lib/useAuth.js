import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl, menuUser } from "./config";

export default function useAuth() {
  const user = Cookies.get("user");
  const token = Cookies.get("token");
  const isAuthenticated =
    Cookies.get("token") && Cookies.get("user") ? true : false;

  const login = async ({ email, password }) => {
    try {
      const { data, status } = await axios
        .post(apiUrl("/auth/login"), {
          email: email,
          password: password,
        })
        .then((response) => response)
        .catch((error) => error.response);

      if (status === 200) Cookies.set("token", data.access_token);

      await me();
      return { data, status, loading: false };
    } catch (error) {
      Cookies.remove();
      return {
        data: {
          message: "Connection refused",
        },
        status: 500,
        loading: false,
      };
    }
  };

  const me = async () => {
    try {
      const token = Cookies.get("token");
      const { data, status } = await axios
        .get(apiUrl("/auth/me"), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => response)
        .catch((error) => error.response);

      data = data.data;
      if (status === 200) Cookies.set("user", data);
      return { data, status, loading: false };
    } catch (error) {
      Cookies.remove();
      return {
        data: {
          message: "Connection refused",
        },
        status: 500,
        loading: false,
      };
    }
  };

  const logout = async () => {
    try {
      const { data, status } = await axios
        .post(apiUrl("/auth/logout"))
        .then((response) => response)
        .catch((error) => error.response);

      if (status === 200) Cookies.remove("token");
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

  return {
    user,
    token,
    isAuthenticated,
    login,
    me,
    logout
  };
}
