import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {
  let addLike = (postId) => {
    props.addLike(postId);
  }

  let postElements =
    props.posts.map(p => <Post addLike={addLike}
                               message={p.message} postId={p.id - 1}
                               likeCount={p.likeCount}
    />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let message = newPostElement.current.value;
    props.updatePostMessage(message);
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea} ref={newPostElement} onChange={onPostChange}
                    value={props.newPostText}/>
        </div>
        <div>
          <button className={s.addButton} onClick={onAddPost}>
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