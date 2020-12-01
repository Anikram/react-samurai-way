const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   followed: true,
    //   name: 'Vasya',
    //   age: 12,
    //   address: {country: 'Russia', city: 'Taganrog'},
    //   status: 'Думай и богатей.'
    // },
    // {
    //   id: 2, avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   name: 'Misha',
    //   age: 22,
    //   address: {country: 'Belarus', city: 'Minsk'},
    //   status: 'Самурй с мечем это то же самое что самурай без меча, но только с мечем.'
    // },
    // {
    //   id: 3,
    //   avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   followed: true,
    //   name: 'Ilona',
    //   age: 13,
    //   address: {country: 'Ukraine', city: 'Donetsk'},
    //   status: 'Похититель гробниц.'
    // },
    // {
    //   id: 4,
    //   avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   followed: false,
    //   name: 'Pasha',
    //   age: 23,
    //   address: {country: 'Russia', city: 'Moscow'},
    //   status: 'Я похититель сердец.'
    // },
    // {
    //   id: 5,
    //   avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   followed: true,
    //   name: 'Anton',
    //   age: 19,
    //   address: {country: 'Belarus', city: 'Grodno'},
    //   status: 'Думай и богатей.'
    // },
    // {
    //   id: 6,
    //   avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   followed: false,
    //   name: 'Tatiana',
    //   age: 16,
    //   address: {country: 'Ukraine', city: 'Kiev'},
    //   status: 'Думай и богатей.'
    // },
    // {
    //   id: 7,
    //   avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   followed: true,
    //   name: 'Sveta',
    //   age: 16,
    //   address: {country: 'Ukraine', city: 'Lviv'},
    //   status: 'Думай и богатей.'
    // },
    // {
    //   id: 8,
    //   avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
    //   followed: true,
    //   name: 'Masha',
    //   age: 17,
    //   address: {country: 'Russia', city: 'St.Petersburg'},
    //   status: 'Думай и богатей.'
    // },
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case (FOLLOW):
      return {
        ...state,
        // users: [...state.users],
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
        users: [...state.users, ...action.users],
      };
    default:
      return state
  }

  return state;
};

export const followAC = (id) => ({type: FOLLOW, userId: id});

export const unFollowAC = (id) => ({type: UNFOLLOW, userId: id});

export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;