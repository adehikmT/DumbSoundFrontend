import { PLAY_MUSIC, USER_SUBSCRIBE } from "./actionTypes";
import { API, setAuthToken } from "../config/api";

export const PlayMusic = (index) => {
  return {
    type: PLAY_MUSIC,
    payload: index,
  };
};

export const CekUser = (token) => {
  return {
    type: USER_SUBSCRIBE,
    payload: async () => {
      try {
        const { data: dataUser } = await API.post("/user", setAuthToken(token));
        return dataUser.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { error: dataError },
            status,
          } = error.response;
          console.log(error.response);
          if (status > 399) throw dataError;
        }
      }
    },
  };
};
