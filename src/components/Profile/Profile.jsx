import Posts from "./Posts/Posts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo/>
      <Posts posts={props.profilePage.posts} listenPostsTextArea={props.listenPostsTextArea} addPost={props.addPost} newPostText={props.newPostText}/>
    </div>
  )
};

export default Profile;