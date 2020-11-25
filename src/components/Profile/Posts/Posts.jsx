import Post from "./Post/Post";
import s from './Posts.module.css';

const Posts = () => {
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea}>

          </textarea>
        </div>
        <div>
          <button className={s.addButton}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Hello, how are you?' likeCount='15'/>
        <Post message='Where are you from?' likeCount='21'/>
      </div>
    </div>
  )
};

export default Posts;