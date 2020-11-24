import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
      <div className={s.text}>{props.message}</div>
      <div className={s.postUi}>
        <div className={s.likeCounter}>
          <span>{props.likeCount}</span>
        </div>

        <span className={''}>Like</span>
      </div>
    </div>
  )
};

export default Post;
