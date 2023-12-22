import axios from "axios";
import { mainUrl } from "./const";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default {
  // ================================================= AUTH ======================================================
  register: async ({ payload }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/register`,
        method: "post",
        data: payload,
        headers: {
          ...headers,
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
          ...headers,
        },
      });
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
  // =================================================== Profile =================================================
  getSingleUser: async ({ user_id, token }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/users/${user_id}`,
        method: "get",
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
  // =================================================== Rooms =====================================================
  getRooms: async ({ token }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/rooms`,
        method: "get",
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
};
