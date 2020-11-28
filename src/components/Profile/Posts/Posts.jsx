import React from 'react';
import s from './Posts.module.css';


const Posts = (props) => {
  debugger;
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea} onChange={props.updatePostMessage}
                    value={props.newPostText}/>
        </div>
        <div>
          <button className={s.addButton} onClick={props.addPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>
        {props.postElements}
      </div>
    </div>
  )
};

export default Posts;