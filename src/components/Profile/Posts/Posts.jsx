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
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
  )
};

export default Posts;