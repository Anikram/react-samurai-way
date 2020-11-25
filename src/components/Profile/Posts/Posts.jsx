import Post from "./Post/Post";
import s from './Posts.module.css';


const Posts = (props) => {
  let postElements =
    props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
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
        {postElements}
      </div>
    </div>
  )
};

export default Posts;