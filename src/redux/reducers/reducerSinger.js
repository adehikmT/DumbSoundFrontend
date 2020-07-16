import { GET_ALL_SINGER,POST_SINGER } from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const GET_ALL_SINGER_PENDING = `${GET_ALL_SINGER}_${ActionType.Pending}`;
const GET_ALL_SINGER_FULFILLED = `${GET_ALL_SINGER}_${ActionType.Fulfilled}`;
const GET_ALL_SINGER_REJECTED = `${GET_ALL_SINGER}_${ActionType.Rejected}`;

const POST_SINGER_PENDING = `${POST_SINGER}_${ActionType.Pending}`;
const POST_SINGER_FULFILLED = `${POST_SINGER}_${ActionType.Fulfilled}`;
const POST_SINGER_REJECTED = `${POST_SINGER}_${ActionType.Rejected}`;

export const singerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SINGER_PENDING:
    case POST_SINGER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SINGER_FULFILLED:
    case POST_SINGER_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ALL_SINGER_REJECTED:
    case POST_SINGER_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
