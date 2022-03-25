import axios from "axios";
import { apiUrl } from "./config";
import Cookies from "js-cookie";

class Auth {
  static isLogin = Cookies.get("token") ? true : false;
  static token = Cookies.get("token");
  static user = Cookies.get("user");

  static setData(name, data) {
    Cookies.set(name, JSON.stringify(data));
    return Cookies.get(name) ? true : false;
  }

  static removeData() {
    Cookies.remove("token");
    Cookies.remove("user");
  }

  static async getUser() {
    try {
      const response = await axios
        .get(apiUrl(`/auth/me`), {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => res);

      if (response.status === 200) {
        this.setData("user", response.data);
      }

      return response;
    } catch (error) {
      await this.deleteUser();
      return error.response;
    }
  }

  static async login({ email, password }) {
    try {
      const response = await axios.post(apiUrl(`/auth/login`), {
        email,
        password,
      });

      if (response.status === 200) {
        this.setData("token", response.data.token);
      }

      return response;
    } catch (error) {
      await this.deleteUser();
      return error.response;
    }
  }

  static async register(form) {
    const response = await axios.post(`/auth/register`, form);
    return response;
  }

  static async logout() {
    const response = await axios.post(`/auth/logout`);
    return response;
  }
}

export default Auth;
