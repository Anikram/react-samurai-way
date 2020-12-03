import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  newsPage: newsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;