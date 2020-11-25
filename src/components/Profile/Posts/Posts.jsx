import Post from "./Post/Post";
import s from './Posts.module.css';

let postData = [
  {id: 1, message: 'Hello, how are you?', likes: 21},
  {id: 2, message: 'Where are you from?', likes: 33}
];

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
        <Post message={postData[0].message} likeCount={postData[0].likes}/>
        <Post message={postData[1].message} likeCount={postData[1].likes}/>
      </div>
    </div>
  )
};

export default Posts;