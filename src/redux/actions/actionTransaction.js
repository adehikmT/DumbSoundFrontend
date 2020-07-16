import {
  GET_ALL_TRANSACTION,
  PATCH_TRANSACTION,
  DELETE_TRANSACTION,
  POST_TRANSACTION,
} from "./actionTypes";
import { API, setAuthToken } from "../config/api";

export const getAlltransactionCreator = (token) => {
  return {
    type: GET_ALL_TRANSACTION,
    payload: async () => {
      try {
        const { data: dataTrans } = await API.get(
          "/transaction",
          setAuthToken(token)
        );
        return dataTrans.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { error: dataError },
            status,
          } = error.response;
          if (status > 399) throw dataError;
        }
      }
    },
  };
};

export const patchTransactionCreator = (body, id, token) => {
  return {
    type: PATCH_TRANSACTION,
    payload: async () => {
      try {
        const { data: dataTrans } = await API.patch(
          "/transaction/" + id,
          body,
          setAuthToken(token)
        );
        return dataTrans.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { error: dataError },
            status,
          } = error.response;
          if (status > 399) throw dataError;
        }
      }
    },
  };
};

export const deleteTransactionCreator = (id, token) => {
  return {
    type: DELETE_TRANSACTION,
    payload: async () => {
      try {
        const { data: dataTrans } = await API.delete(
          "/transaction/" + id,
          setAuthToken(token)
        );
        return dataTrans.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { error: dataError },
            status,
          } = error.response;
          if (status > 399) throw dataError;
        }
      }
    },
  };
};

export const postTransactionCreator = (body, token) => {
  const formData = new FormData();

  formData.append("startDate", body.start);
  formData.append("dueDate", body.due);
  formData.append("image", body.image);
  formData.append("status", "pending");
  formData.append("statusPay", 0);

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  return {
    type: POST_TRANSACTION,
    payload: async () => {
      try {
        const { data: dataTrans } = await API.post(
          "/transaction/",
          formData,
          config,
          setAuthToken(token)
        );
        return dataTrans.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { error: dataError },
            status,
          } = error.response;
          if (status > 399) throw dataError;
        }
      }
    },
  };
};
