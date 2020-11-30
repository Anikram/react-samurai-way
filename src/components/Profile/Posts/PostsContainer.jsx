import React from 'react';
import {addLikePostActionCreator, addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
      store => {
        let state = store.getState().profileReducer;

        let newPostText = store.getState().profileReducer.newPostText;

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let addLike = (postId) => {
          store.dispatch(addLikePostActionCreator(postId))
        }

        let updatePostMessage = (message) => {
          store.dispatch(updatePostActionCreator(message));
        }

        return <Posts newPostText={newPostText} addPost={addPost}
             updatePostMessage={updatePostMessage} posts={state.posts} addLike={addLike}/>
      }
    }
    </StoreContext.Consumer>
  );
};

export default PostsContainer;