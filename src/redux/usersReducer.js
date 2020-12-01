const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
  users: [],
  totalUsersCount: 21,
  pageSize: 50,
  currentPage: 1
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
    default:
      return state
  }

  return state;
};

export const followAC = (id) => ({type: FOLLOW, userId: id});

export const unFollowAC = (id) => ({type: UNFOLLOW, userId: id});

export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});

export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});

export default usersReducer;