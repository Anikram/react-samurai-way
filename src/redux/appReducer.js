import {fetchUserProfile} from "./authReducer";

const INITIALIZATION_SUCCESS = "/app/INITIALIZATION-SUCCESS";

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }

}
const initializingSuccess = () => ({type: INITIALIZATION_SUCCESS});

export const initializeApp = () => (dispatch) => {
  dispatch(fetchUserProfile()).then(() => {
    dispatch(initializingSuccess());
  })
}

export default appReducer;