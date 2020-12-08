import friendsAPI from "../api/friendsApi";

const GET_FRIENDS = 'GET-FRIENDS';

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
        friends: action.friends
      }
    default:
      return state;

  }
};

export const getFriends = (friends) => ({type: GET_FRIENDS, friends});

export const getUserFriends = (friendsNumber, pageNumber) => {
  return (dispatch) => {
    friendsAPI.fetchUserFriends(friendsNumber, pageNumber).then((data) => {
      dispatch(getFriends(data.items))
    })
  }
}

export default friendsReducer;