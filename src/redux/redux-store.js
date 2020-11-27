import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";



let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  newsReducer,
  friendsReducer
});

let store = createStore(reducers);

export default store;