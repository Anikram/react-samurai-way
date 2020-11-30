import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";



let reducers = combineReducers({
  //profilePage: profileReducer
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  newsPage: newsReducer,
  friendsPage: friendsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;