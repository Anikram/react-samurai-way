const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FETCHING_FOLLOWING_IN_PROGRESS ='TOGGLE-IS-FETCHING-FOLLOWING-IN-PROGRESS';

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
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        }),
      };
    case (UNFOLLOW):
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        }),
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
          : [state.followingInProgress.filter(id => id != action.userId)]
      }
    default:
      return state
  }

};

export const follow = (id) => ({type: FOLLOW, userId: id});

export const unFollow = (id) => ({type: UNFOLLOW, userId: id});

export const setUsers = (users) => ({type: SET_USERS, users: users});

export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FETCHING_FOLLOWING_IN_PROGRESS, isFetching, userId});

export default usersReducer;