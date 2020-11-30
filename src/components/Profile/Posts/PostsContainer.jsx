import React from 'react';
import {addLikePostActionCreator, addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreator())},
    addLike: (postId) => {dispatch(addLikePostActionCreator(postId))},
    updatePostMessage: (message)=> {dispatch(updatePostActionCreator(message))},
  }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;