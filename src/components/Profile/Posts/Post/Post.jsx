import s from './Post.module.css';
import {addLikePostActionCreator} from "../../../../redux/state";


const Post = (props) => {


  const onAddLikeClick = () => {
    props.dispatch(addLikePostActionCreator(props.postId));
  }

  return (
    <div className={s.post}>
      <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
      <div className={s.text}>{props.message}</div>
      <div className={s.postUi}>
        <div className={s.likeCounter}>
          <span>{props.likeCount}</span>
        </div>

        <button onClick={onAddLikeClick}>Like</button>
      </div>
    </div>
  )
};

export default Post;
