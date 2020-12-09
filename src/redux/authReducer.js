import authAPI from "../api/AuthApi";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET-USER-DATA';
const UPDATE_ERRORS = 'UPDATE-ERRORS';
const STORE_CAPTCHA = 'STORE-CAPTCHA';

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
const updateErrors = (errors) => ({type: UPDATE_ERRORS, errors})

//auth me thunk creator
export const fetchUserProfile = () => {
  return (dispatch) => {
    return authAPI.checkUserAuth()
      .then((response) => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          dispatch(setAuthUserData(id, login, email, true));
        }
      });
  }
}

//auth login thunk creator
export const loginUser = (formData) => (dispatch) => {
  authAPI.login(formData).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(fetchUserProfile());
    } else if (response.data.resultCode === 10) {
      authAPI.getCaptcha().then(response => {
        dispatch(storeCaptchaUrl(response.data.url))
      })
    } else {
      let message = response.data.messages.length > 0 ? [...response.data.messages] : 'Error';
      dispatch(stopSubmit('loginForm', {_error: message}))
    }
  })
}


export const logoutUser = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
  }
}

export default authReducer;