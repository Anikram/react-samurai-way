
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
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

export default authReducer;