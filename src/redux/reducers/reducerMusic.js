import {
  GET_ALL_MUSIC,
  POST_MUSIC,
} from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const GET_ALL_MUSIC_PENDING = `${GET_ALL_MUSIC}_${ActionType.Pending}`;
const GET_ALL_MUSIC_FULFILLED = `${GET_ALL_MUSIC}_${ActionType.Fulfilled}`;
const GET_ALL_MUSIC_REJECTED = `${GET_ALL_MUSIC}_${ActionType.Rejected}`;

const POST_MUSIC_PENDING = `${POST_MUSIC}_${ActionType.Pending}`;
const POST_MUSIC_FULFILLED = `${POST_MUSIC}_${ActionType.Fulfilled}`;
const POST_MUSIC_REJECTED = `${POST_MUSIC}_${ActionType.Rejected}`;

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MUSIC_PENDING:
    case POST_MUSIC_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MUSIC_FULFILLED:
    case POST_MUSIC_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ALL_MUSIC_REJECTED:
    case POST_MUSIC_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
