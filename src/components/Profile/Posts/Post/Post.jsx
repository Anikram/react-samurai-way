import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.post}>
      <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
      <div className={s.text}>post 1</div>
    </div>
  )
};

export default Post;
