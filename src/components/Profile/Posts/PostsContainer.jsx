import React from 'react';

import {addLikePostActionCreator, addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";


const PostsContainer = (props) => {
  let state = props.store.getState().profileReducer;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let addLike = (postId) => {
    props.store.dispatch(addLikePostActionCreator(postId))
  }

  let updatePostMessage = (message) => {
    props.store.dispatch(updatePostActionCreator(message));
  }

  let newPostText = props.store.getState().profileReducer.newPostText;

  return (
    <Posts newPostText={newPostText} addPost={addPost}
           updatePostMessage={updatePostMessage} posts={state.posts} addLike={addLike}/>
  );
};

export default PostsContainer;