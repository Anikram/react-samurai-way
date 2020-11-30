const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD-LIKE';
const UPDATE_POSTS_TEXTAREA = 'UPDATE-POSTS-TEXTAREA';

let initialState = {
  posts: [
    {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 23},
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 1},
    {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 33},
    {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 12},
    {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 233},
    {id: 6, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 14},
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
          id: 5,
          message: state.newPostText,
          likeCount: 0
        }],
        newPostText: ''
      }
    case UPDATE_POSTS_TEXTAREA:
      return {
        ...state,
        newPostText: action.message
      };
    case ADD_LIKE: {
      let stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      stateCopy.posts[action.id].likeCount += 1;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const addLikePostActionCreator = (post_id) => ({type: ADD_LIKE, id: post_id});
export const updatePostActionCreator = (message) => ({type: UPDATE_POSTS_TEXTAREA, message: message});
export default profileReducer;