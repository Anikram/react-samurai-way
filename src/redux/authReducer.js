import authAPI from "../api/AuthApi";

// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_AUTH_USER_DATA = 'SET-USER-DATA';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
};
export const setAuthUserData = (userId,login,email) => ({type: SET_AUTH_USER_DATA, data: {userId,login,email}});

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

export default authReducer;