import axios from "axios";
import { apiUrl } from "./config";
import Cookies from "js-cookie";

class Auth {
  static isLogin = Cookies.get("token") ? true : false;
  static getToken = Cookies.get("token");

  static async login({ email, password }) {
    try {
      const response = await axios.post(apiUrl(`/api/auth/login`), {
        email,
        password,
      });

      if (response.status === 200) {
        Cookies.set("token", response.data.access_token);
        console.table("berhasil Login", this.getToken);
      }

      return response;
    } catch (error) {
      Cookies.remove("token");
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
    const response = await axios.get(`/auth/user`);
    return response;
  }
}

export default Auth;
