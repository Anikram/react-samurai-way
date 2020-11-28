import React from 'react';
import Post from "./Post/Post";
import {addLikePostActionCreator, addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";


const PostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  // let addLike = (postId) => {
  //   props.store.dispatch(addLikePostActionCreator(postId))
  // }

  let updatePostMessage = (e) => {
    let message = e.target.value;
    props.store.dispatch(updatePostActionCreator(message));
  }

  let newPostText = props.store.getState().profileReducer.newPostText;

  let postElements =
    props.store.getState().profileReducer.posts.map(p => <Post dispatch={props.store.dispatch.bind(props.store)}
                                                               message={p.message} postId={p.id - 1}
                                                               likeCount={p.likeCount}
    />);


  return (
    <Posts postElements={postElements} newPostText={newPostText} addPost={addPost}
           updatePostMessage={updatePostMessage}/>
  )
};

export default PostsContainer;