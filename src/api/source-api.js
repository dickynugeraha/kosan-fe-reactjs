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
  loginAdmin: async ({ payload }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/login-admin`,
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
  getAllUser: async ({ token }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/users`,
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
  getRooms: async () => {
    try {
      const response = await axios({
        url: `${mainUrl}/all-room`,
        method: "get",
        headers: {
          ...headers,
        },
      });
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
  addRoom: async ({ token, payload }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/rooms`,
        method: "post",
        data: payload,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
  deleteRoom: async ({ token, id }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/rooms/${id}`,
        method: "delete",
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
  //  ================================================= ORDERS ==================================================
  createOrder: async ({ token, payload }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/orders`,
        method: "post",
        data: payload,
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
  orderNeedPaymentUser: async ({ token, userId }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/orders/need-payment/${userId}`,
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
  updatePayment: async ({ token, payload }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/orders/update-payment`,
        method: "post",
        data: payload,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
  ordersByUser: async ({ token, userId }) => {
    try {
      const response = await axios({
        url: `${mainUrl}/orders/user/${userId}`,
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
