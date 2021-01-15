import { combineReducers, createStore } from "redux";
import blogAuthReducer from "./ducks/blogAuth";

const reducer = combineReducers({
  auth: blogAuthReducer,
});

//creation of a store
const store = createStore(reducer);

export default store;