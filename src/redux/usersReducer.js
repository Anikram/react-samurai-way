import {usersAPI} from "../api/UsersApi";
import {updateObjectInArray} from "../helpers/objectHelpers";
import {getUserFriends} from "./friendsReducer";


const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_USERS = '/users/SET-USERS';
const SET_CURRENT_PAGE = '/users/CHANGE-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = '/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = '/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FETCHING_FOLLOWING_IN_PROGRESS = '/users/TOGGLE-IS-FETCHING-FOLLOWING-IN-PROGRESS';

let initialState = {
  users: [],
  totalUsersCount: 21,
  pageSize: 50,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case (FOLLOW):
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userId, "id", {followed: true})
      };
    case (UNFOLLOW):
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userId, "id", {followed: false})
      };
    case (SET_USERS):
      return {
        ...state,
        users: action.users,
      };
    case (SET_CURRENT_PAGE):
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case (SET_TOTAL_USERS_COUNT):
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case (TOGGLE_IS_FETCHING):
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FETCHING_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(id => id !== action.userId)]
      }
    default:
      return state
  }

};

//action creators
export const follow = (id) => ({type: FOLLOW, userId: id});

export const unFollow = (id) => ({type: UNFOLLOW, userId: id});

export const setUsers = (users) => ({type: SET_USERS, users: users});

export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FETCHING_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId
});


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  let userResponse = await apiMethod(userId);
  if (userResponse.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(getUserFriends())

  dispatch(toggleFollowingInProgress(false, userId));
}

//Thunk creators
export const followUser = (userId) => async (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow);


}

export const unfollowUser = (userId) => async (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollow);

}

export const fetchUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  let response = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
}

export default usersReducer;

