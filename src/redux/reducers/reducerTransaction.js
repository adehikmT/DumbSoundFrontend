import {
  GET_ALL_TRANSACTION,
  PATCH_TRANSACTION,
  DELETE_TRANSACTION,
  POST_TRANSACTION,
} from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const GET_ALL_TRANSACTION_PENDING = `${GET_ALL_TRANSACTION}_${ActionType.Pending}`;
const GET_ALL_TRANSACTION_FULFILLED = `${GET_ALL_TRANSACTION}_${ActionType.Fulfilled}`;
const GET_ALL_TRANSACTION_REJECTED = `${GET_ALL_TRANSACTION}_${ActionType.Rejected}`;

const PATCH_TRANSACTION_PENDING = `${PATCH_TRANSACTION}_${ActionType.Pending}`;
const PATCH_TRANSACTION_FULFILLED = `${PATCH_TRANSACTION}_${ActionType.Fulfilled}`;
const PATCH_TRANSACTION_REJECTED = `${PATCH_TRANSACTION}_${ActionType.Rejected}`;

const DELETE_TRANSACTION_PENDING = `${DELETE_TRANSACTION}_${ActionType.Pending}`;
const DELETE_TRANSACTION_FULFILLED = `${DELETE_TRANSACTION}_${ActionType.Fulfilled}`;
const DELETE_TRANSACTION_REJECTED = `${DELETE_TRANSACTION}_${ActionType.Rejected}`;

const POST_TRANSACTION_PENDING = `${POST_TRANSACTION}_${ActionType.Pending}`;
const POST_TRANSACTION_FULFILLED = `${POST_TRANSACTION}_${ActionType.Fulfilled}`;
const POST_TRANSACTION_REJECTED = `${POST_TRANSACTION}_${ActionType.Rejected}`;

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTION_PENDING:
    case DELETE_TRANSACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TRANSACTION_FULFILLED:
    case DELETE_TRANSACTION_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ALL_TRANSACTION_REJECTED:
    case DELETE_TRANSACTION_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const patchTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATCH_TRANSACTION_PENDING:
    case POST_TRANSACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case PATCH_TRANSACTION_FULFILLED:
    case POST_TRANSACTION_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case PATCH_TRANSACTION_REJECTED:
    case POST_TRANSACTION_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
