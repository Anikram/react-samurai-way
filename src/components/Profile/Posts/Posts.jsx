import Post from "./Post/Post";
import s from './Posts.module.css';

const Posts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div>
          <textarea className={s.textarea}>

          </textarea>
        <button>
          Add post
        </button>
      </div>
      <div className={s.posts}>
        <Post message='Hello, how are you?' likeCount='15'/>
        <Post message='Where are you from?' likeCount='21'/>
      </div>
    </div>
  )
};

export default Posts;