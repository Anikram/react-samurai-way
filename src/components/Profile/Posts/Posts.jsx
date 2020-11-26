import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css';


const Posts = (props) => {
  let postElements =
    props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let updatePostTextarea = () => {
    props.dispatch({type: 'UPDATE-POSTS-TEXTAREA', message: newPostElement.current.value});
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea} ref={newPostElement} onChange={updatePostTextarea}
                    value={props.profilePage.newPostText}/>
        </div>
        <div>
          <button className={s.addButton} onClick={addPost}>
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