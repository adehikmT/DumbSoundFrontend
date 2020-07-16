import { AUTH_REGISTER, AUTH_LOGIN } from "./actionTypes";
import { API } from "../config/api";

export const authRegistCreator = (body) => {
  return {
    type: AUTH_REGISTER,
    payload: async () => {
      try {
        const { data: dataReg } = await API.post("/registration", body);

        // console.log(dataFilm);/auth/user
        localStorage.setItem("token", dataReg.data.token);

        return dataReg;
      } catch (error) {
        if (error.response) {
          const {
            data: { error: dataError },
            status,
          } = error.response;
          // console.log(dataError.error);
          if (status > 399) throw dataError;
        }
      }
    },
  };
};

export const authLoginCreator = (body) => {
  return {
    type: AUTH_LOGIN,
    payload: async () => {
      try {
        const { data: dataLog } = await API.post("/login", body);

        // console.log(dataFilm);/auth/user
        localStorage.setItem("token", dataLog.data.token);
        localStorage.setItem("role", dataLog.data.role);

        return dataLog;
      } catch (error) {
        if (error.response) {
          const {
            data: { error: dataError },
            status,
          } = error.response;
          // console.log(dataError.error);
          if (status > 399) throw dataError;
        }
      }
    },
  };
};
