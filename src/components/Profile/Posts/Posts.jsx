import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import PostsReduxForm from "./PostsReduxForm";


const Posts = React.memo(props => {
  let addLike = (postId) => {
    props.addLike(postId);
  }

  let postElements =
    props.posts.map(p => <Post addLike={addLike}
                               message={p.message} key={p.id} postId={p.id - 1}
                               likeCount={p.likeCount}
    />);

  let onSubmit = (formData) => {
    props.addPost(formData.newPostText);
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <PostsReduxForm onSubmit={onSubmit}/>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
});

export default Posts;