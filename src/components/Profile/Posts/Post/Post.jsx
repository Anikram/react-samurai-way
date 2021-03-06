import s from './Post.module.css';
import React from "react";

const Post = (props) => {
  let onAddLike = () => {
    props.addLike(props.postId);
  }

  return (
    <div className={s.post}>
      <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
      <div className={s.text}>{props.message}</div>
      <div className={s.postUi}>
        <div className={s.likeCounter}>
          <span>{props.likeCount}</span>
        </div>

        <button onClick={onAddLike}>Like</button>
      </div>
    </div>
  )
};

export default Post;
