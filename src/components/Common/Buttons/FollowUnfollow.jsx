import s from "../../Users/Users.module.css";

export const FollowUnfollowButton = ({userId, followed, followingInProgress, unfollowUser, followUser}) => {
  if (followed) {
    return <button disabled={followingInProgress.some(id => id === userId)} onClick={() => {
      unfollowUser(userId);
    }} className={`${s.button} ${s.unfollow}`}> Un follow </button>
  } else {
    return <button disabled={followingInProgress.some(id => id === userId)} onClick={() => {
      followUser(userId);
    }} className={`${s.button} ${s.follow}`}> Follow </button>
  }
}