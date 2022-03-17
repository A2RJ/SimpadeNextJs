import axios from "axios";
import { apiUrl } from "./config";
import Cookies from "js-cookie";

class Auth {
  static isLogin = Cookies.get("token") ? true : false;
  static getToken = Cookies.get("token");
  static getUserLogin = Cookies.get("user");

  static async deleteLogin() {
    Cookies.remove("token");
    Cookies.remove("user");
  }

  static async login({ email, password }) {
    try {
      const response = await axios.post(apiUrl(`/auth/login`), {
        email,
        password,
      });

      if (response.status === 200) {
        Cookies.set("token", response.data.access_token);
      }

      return response;
    } catch (error) {
      await this.deleteLogin();
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

  static async getUser() {
    try {
      const response = await axios
        .get(apiUrl(`/auth/me`), {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken}`,
          },
        })
        .then((res) => res);

      if (response.status === 200) {
        Cookies.set("user", JSON.stringify(response.data));
      }

      return response;
    } catch (error) {
      await this.deleteLogin();
      return error.response;
    }
  }
}

export default Auth;
