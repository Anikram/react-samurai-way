import friendsAPI from "../api/friendsApi";

const GET_FRIENDS = '/friends/GET-FRIENDS';
const CLEAR_FRIENDS = '/friends/CLEAR-FRIENDS'
const DELETE_FRIEND ='/friends/DELETE-FRIEND'

let initialState = {
  friends: [
    {id: 1, name: 'Felix', photos: {small: null, large: null}},
    {id: 2, name: 'Atom', photos: {small: null, large: null}},
    {id: 3, name: 'Braian', photos: {small: null, large: null}},
    {id: 4, name: 'Morgan', photos: {small: null, large: null}},
    {id: 5, name: 'Emma', photos: {small: null, large: null}},
  ],
  friendsNumber: 10,
  friendsPageNumber: 1
};

const friendsReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: [...action.friends]
      }
    case CLEAR_FRIENDS:
      return {
        ...state,
        friends: initialState.friends
      }
    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(f => f.id !== action.friendId)
      }
    default:
      return state;
  }
};

 const getFriends = (friends) => ({type: GET_FRIENDS, friends});
 const clearFriendsOnLogout = () => ({type: CLEAR_FRIENDS});

export const getUserFriends = (friendsNumber = 10, friendsPageNumber = 1) => async (dispatch) => {
  let response = await friendsAPI.fetchUserFriends(friendsNumber, friendsPageNumber);
  dispatch(getFriends(response.data.items))
}

export const clearUserFriendsOnLogout = () => (dispatch) =>{
   dispatch(clearFriendsOnLogout())
}

export const updateUserFriends = () => (dispatch) => {
  dispatch(getUserFriends())
}

export default friendsReducer;