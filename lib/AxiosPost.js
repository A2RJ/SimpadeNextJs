import axios from "axios";

class AxiosPost {
  static async post(url, headers, data = false) {
    if (data) {
      const response = await axios({
        method: "post",
        url: url,
        headers: headers,
        data: data,
      });
      return response;
    }
    const response = await axios({
      method: "post",
      url: url,
      headers: headers,
    });
    return response;
  }

  static async get(url, headers) {
    const response = await axios.get(url, headers);
    return response;
  }
}

export default AxiosPost;
