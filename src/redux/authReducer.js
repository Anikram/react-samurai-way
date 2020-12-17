import authAPI from "../api/AuthApi";
import {stopSubmit} from "redux-form";
import {clearUserFriendsOnLogout, getUserFriends} from "./friendsReducer";
import {getUserProfile} from "./profileReducer";

const SET_AUTH_USER_DATA = '/auth/SET-USER-DATA';
const UPDATE_ERRORS = '/auth/UPDATE-ERRORS';
const STORE_CAPTCHA = '/auth/STORE-CAPTCHA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: '',
  errors: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        captchaUrl: ''
      }
    case UPDATE_ERRORS:
      return {
        ...state,
        errors: [action.errors]
      }
    case STORE_CAPTCHA:
      return {
        ...state,
        captchaUrl: action.url
      }
    default:
      return state
  }
};
export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: {userId, login, email, isAuth}
});
const storeCaptchaUrl = (url) => ({type: STORE_CAPTCHA, url})

//auth me thunk creator
export const fetchUserProfile = () => async (dispatch) => {
  let response = await authAPI.checkUserAuth();

  if (response.data.resultCode === 0) {
    let {id, login, email} = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
    dispatch(getUserProfile(id));
  }
}

//auth login thunk creator
export const loginUser = (formData) => async (dispatch) => {
  let response = await authAPI.login(formData);

  if (response.data.resultCode === 0) {
    dispatch(fetchUserProfile());

    dispatch(getUserFriends());

  } else if (response.data.resultCode === 10) {
    let response = await authAPI.getCaptcha();
    dispatch(storeCaptchaUrl(response.data.url))
  } else {
    let message = response.data.messages.length > 0 ? [...response.data.messages] : 'Error';
    dispatch(stopSubmit('loginForm', {_error: message}))
  }
}


export const logoutUser = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    dispatch(clearUserFriendsOnLogout());
  }
}

export default authReducer;