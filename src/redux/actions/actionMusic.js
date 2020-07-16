import { POST_MUSIC, GET_ALL_MUSIC } from "./actionTypes";
import { API, setAuthToken } from "../config/api";

export const getAllMusicCreator = () => {
  return {
    type: GET_ALL_MUSIC,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.get("/music");
        return dataFilm.data;
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

export const postMusicCreator = (body, token) => {

  const { title, image, year, artisId, attache } = body;
  const formdata = new FormData();
  formdata.append("title",title);
  formdata.append("image",image);
  formdata.append("year",year);
  formdata.append("artisId",artisId);
  formdata.append("attache",attache);

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  return {
    type: POST_MUSIC,
    payload: async () => {
      try {
        const { data: dataMusic } = await API.post(
          "/music",
          formdata,
          config,
          setAuthToken(token)
        );
        // console.log(dataFilm);
        return dataMusic.data;
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

// export const getDetailfilmCreator = (id, token) => {
//   return {
//     type: DETAIL_FILM,
//     payload: async () => {
//       try {
//         const { data: dataFilm } = await API.get(
//           "/film/" + id,
//           setAuthToken(token)
//         );
//         return dataFilm.data;
//       } catch (error) {
//         if (error.response) {
//           const {
//             data: { data: dataError },
//             status,
//           } = error.response;
//           if (status > 399) throw dataError.error;
//         }
//       }
//     },
//   };
// };
