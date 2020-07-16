import { PLAY_MUSIC, USER_SUBSCRIBE } from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  index: 0,
};

export const musicPlay = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return action.payload;
    default:
      return state;
  }
};

const initialStateSub = {
  data: null,
  loading: false,
  error: null,
};

const USER_SUBSCRIBE_PENDING = `${USER_SUBSCRIBE}_${ActionType.Pending}`;
const USER_SUBSCRIBE_FULFILLED = `${USER_SUBSCRIBE}_${ActionType.Fulfilled}`;
const USER_SUBSCRIBE_REJECTED = `${USER_SUBSCRIBE}_${ActionType.Rejected}`;

export const userSub = (state = initialStateSub, action) => {
  switch (action.type) {
    case USER_SUBSCRIBE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case USER_SUBSCRIBE_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case USER_SUBSCRIBE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
