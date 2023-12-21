import axios from "axios";
import { mainUrl } from "./const";

const checkToken = async () => {};

export default {
  register: async ({ payload }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/register`,
        method: "post",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
  loginUser: async ({ payload }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/login-user`,
        method: "post",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
};
