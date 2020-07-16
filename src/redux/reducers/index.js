import { combineReducers } from "redux";
import { musicReducer } from "./reducerMusic";
import { singerReducer } from "./reducerSinger";
import { authReducer } from "./reducerAuth";
import {
  transactionReducer,
  patchTransactionReducer,
} from "./reducerTransaction";
import { musicPlay, userSub } from "./reducerPlay";

const reducer = combineReducers({
  singerReducer,
  musicReducer,
  authReducer,
  transactionReducer,
  patchTransactionReducer,
  musicPlay,
  userSub,
});

export default reducer;
