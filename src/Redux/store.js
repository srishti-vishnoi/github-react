import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducers/login.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { searchUserReducer } from "./reducers/searchUser.reducer";
import { userProfileReducer } from "./reducers/userProfile.reducer";
import { suggestUserReducer } from "./reducers/suggestUser.reducer";
const rootReducer = combineReducers({
  login: loginReducer,
  search: searchUserReducer,
  userProfile: userProfileReducer,
  suggestions: suggestUserReducer,
});
const middleWare = [logger, thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleWare));
