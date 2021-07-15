import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducers/login.reducer";
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
const middleWare = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleWare));
