import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReducer";
import {composeWithDevTools} from "redux-devtools-extension";



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  newsPage: newsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
});

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
  // other store enhancers if any
));

window.store = store;

export default store;