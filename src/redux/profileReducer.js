import profileAPI from "../api/profileApi";
import profileApi from "../api/profileApi";

const ADD_POST = '/profile/ADD-POST';
const DELETE_POST = '/profile/DELETE-POST';
const ADD_LIKE = '/profile/ADD-LIKE';
const SET_USER_PROFILE = '/profile/SET-USER-PROFILE';
const SET_USER_STATUS = '/profile/SET-USER-STATUS';
const SET_FRIENDS = '/profile/SET-FRIENDS';
const TOGGLE_IS_FRIEND = '/profile/TOGGLE-IS-FRIEND';
const FLUSH_PROFILE_DATA = '/profile/FLUSH-PROFILE-DATA'

let initialState = {
  posts: [
    {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 23},
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 1},
    {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 33},
    {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 12},
    {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 233},
    {id: 6, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 14},
  ],
  profile: null,
  status: '',
  isFriend: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
          id: (state.posts.length + 1),
          message: action.newPostText,
          likeCount: 0
        }],
      }
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(p => p.id !== action.postId),]
      }
    case ADD_LIKE: {
      let stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      stateCopy.posts[action.id].likeCount += 1;
      return stateCopy;
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends
      }
    case TOGGLE_IS_FRIEND:
      return {
        ...state,
        isFriend: action.value
      }
    case FLUSH_PROFILE_DATA:
      return {
        ...state,
        profile: null
      }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addLike = (post_id) => ({type: ADD_LIKE, id: post_id});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setFriends = (friends) => ({type: SET_FRIENDS, friends});
const toggleIsFriend = (value) => ({type: TOGGLE_IS_FRIEND, value});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateUserStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
}

export const setFriendsForUser = (friends) => (dispatch) => {
  dispatch(setFriends(friends))
}

export const isFriend = (userId) => async (dispatch) => {
  let response = await profileApi.isFriend(userId);

  response.data ? dispatch(toggleIsFriend(true)) : dispatch(toggleIsFriend(false))
}

export const resetProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
  dispatch(getUserStatus(userId));
  dispatch(isFriend(userId));
}

export default profileReducer;