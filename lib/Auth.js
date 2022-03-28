import axios from "axios";
import { apiUrl } from "./config";
import { getCookie, removeCookies, setCookies } from "cookies-next";

class Auth {
  static isLogin = this.getCridential("token") ? true : false;
  static token = this.getCridential("token");
  static user = this.getCridential("user");

  static setCridential(params, value) {
    setCookies(params, value);
    return this.getCridential(params);
  }

  static getCridential(params) {
    return getCookie(params);
  }

  static rCridential() {
    removeCookies("token");
    removeCookies("user");
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
      this.rCridential();
      return error.response;
    }
  }

  static async login({ email, password }) {
    const response = await axios
      .post(apiUrl(`/auth/login`), {
        email,
        password,
      })
      .then((res) => {
        this.setCridential("token", res.access_token);
        return res;
      })
      .catch((err) => {
        this.rCridential();
        if (err.response.status === 401) return err.response;
      });

    return response;
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
