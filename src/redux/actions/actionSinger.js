import { GET_ALL_SINGER, POST_SINGER } from "./actionTypes";
import { API,setAuthToken } from "../config/api";

export const getAllSingerCreator = () => {
  return {
    type: GET_ALL_SINGER,
    payload: async () => {
      try {
        const { data: dataCategory } = await API.get("/singer");
        return dataCategory.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { errpr: dataError },
            status,
          } = error.response;
          if (status > 399) throw dataError;
        }
      }
    },
  };
};

export const postSingerCreator = (body, token) => {
  return {
    type: POST_SINGER,
    payload: async () => {
      try {
        const { data: dataSinger } = await API.post(
          "/singer",
          body,
          setAuthToken(token)
        );
        // console.log(dataFilm);
        return dataSinger.data;
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
