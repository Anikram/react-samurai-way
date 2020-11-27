const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD-LIKE';
const UPDATE_POSTS_TEXTAREA = 'UPDATE-POSTS-TEXTAREA';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:

      state.posts.push(
        {
          id: 7,
          message: state.newPostText,
          likeCount: 0
        }
      )
      state.newPostText = '';
      break
    case UPDATE_POSTS_TEXTAREA:
      state.newPostText = action.message;
      break
    case ADD_LIKE:
      state.posts[action.id].likeCount += 1;
      break
    default:
      break
  }

  return state;
}

export default profileReducer;