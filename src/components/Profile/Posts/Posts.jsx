import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/state";


const Posts = (props) => {
  let newPostText = props.profilePage.newPostText;

  let postElements =
    props.profilePage.posts.map(p => <Post message={p.message} postId={p.id-1} dispatch={props.dispatch} likeCount={p.likeCount}/>);

  let onAddPostClick = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostMessageChange = (e) => {
    let message = e.target.value;
    props.dispatch(updatePostActionCreator(message));
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea} onChange={onPostMessageChange}
                    value={newPostText}/>
        </div>
        <div>
          <button className={s.addButton} onClick={onAddPostClick}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
};

export default Posts;