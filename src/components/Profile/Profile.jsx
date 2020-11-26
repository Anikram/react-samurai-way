import Posts from "./Posts/Posts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo/>
      <Posts posts={props.data} addPost={props.addPost} listenTextArea={props.listenTextArea}/>
    </div>
  )
};

export default Profile;