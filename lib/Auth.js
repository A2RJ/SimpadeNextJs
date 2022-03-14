import axios from "axios";

class Auth {
  async login(username, password) {
    const response = await axios.post(`/auth/login`, {
      username,
      password,
    });

    return response;
  }

  async register(form) {
    const response = await axios.post(`/auth/register`, form);
    return response;
  }

  async logout() {
    const response = await axios.post(`/auth/logout`);
    return response;
  }

  async getUser() {
    const response = await axios.get(`/auth/user`);
    return response;
  }
}

export default Auth;
