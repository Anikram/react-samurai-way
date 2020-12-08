import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import PostsReduxForm from "./PostsReduxForm";


const Posts = (props) => {
  let addLike = (postId) => {
    props.addLike(postId);
  }

  let postElements =
    props.posts.map(p => <Post addLike={addLike}
                               message={p.message} key={p.id} postId={p.id - 1}
                               likeCount={p.likeCount}
    />);

  let newPostElement = React.createRef();

  let onSubmit = (formData) => {
    console.log(formData)
    props.addPost(formData);
  }

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
      <PostsReduxForm onSubmit={onSubmit}/>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
};

export default Posts;