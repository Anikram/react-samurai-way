import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import PostsReduxForm from "./PostsReduxForm";

const Posts = React.memo(({addLike, posts, addPost, ...props }) => {
  let addLikeToPost = (postId) => {
    addLike(postId);
  }

  let postElements =
    posts.map(p => <Post addLike={addLikeToPost}
                               message={p.message} key={p.id} postId={p.id - 1}
                               likeCount={p.likeCount}
    />);

  let onSubmit = (formData) => {
    addPost(formData.newPostText);
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