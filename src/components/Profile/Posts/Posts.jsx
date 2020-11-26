import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css';


const Posts = (props) => {
  let postElements =
    props.posts.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let changeTextarea = () => {
    props.listenTextArea(newPostElement.current.value);
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea} ref={newPostElement} onChange={changeTextarea} value={props.posts.buffer}/>
        </div>
        <div>
          <button className={s.addButton} onClick={ addPost }>
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