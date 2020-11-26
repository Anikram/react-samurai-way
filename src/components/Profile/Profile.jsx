import Posts from "./Posts/Posts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo/>
      <Posts posts={props.data.posts} addPost={props.addPost} listenPostsTextArea={props.listenPostsTextArea}
             newPostText={props.data.newPostText}/>
    </div>
  )
};

export default Profile;