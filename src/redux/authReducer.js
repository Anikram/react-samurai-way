import authAPI from "../api/AuthApi";

// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_AUTH_USER_DATA = 'SET-USER-DATA';
const DELETE_AUTH_USER_DATA = 'DELETE-USER-DATA';
const UPDATE_ERRORS = 'UPDATE-ERRORS';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  errors: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case DELETE_AUTH_USER_DATA:
      return {
        ...state,
        isAuth: false,
        userId: null,
        email: null,
        login: null
      }
    case UPDATE_ERRORS:
    return {
      ...state,
      errors: [action.errors]
    }
    default:
      return state
  }
};
export const setAuthUserData = (userId,login,email) => ({type: SET_AUTH_USER_DATA, data: {userId,login,email}});
const updateErrors = (errors) => ({type: UPDATE_ERRORS, errors})
const deleteAuthUserData = () => ({type: DELETE_AUTH_USER_DATA})

//auth me thunk creator
export const fetchUserProfile = () => {
  return (dispatch) => {
    authAPI.checkUserAuth()
      .then((response) => {
        if (response.data.resultCode === 0){
          let {id, login, email} = response.data.data;
          dispatch(setAuthUserData(id, login, email));
        }
      });
  }
}

//auth login thunk creator
export const loginUser = (formData) => {
  return (dispatch) => {
    authAPI.loginUserAuth(formData).then(response => {
      if (response.data.resultCode === 0) {
        console.log(`OK - User id#${response.data.userId} is logged in!`)
        dispatch(setAuthUserData(response.data.data.userId, formData.email, formData.password));
      } else {
        dispatch(updateErrors(response.data.messages))
      }
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    authAPI.logoutUserAuth().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(deleteAuthUserData());
      }
    })
  }
}

export default authReducer;