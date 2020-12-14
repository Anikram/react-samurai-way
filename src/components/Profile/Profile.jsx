import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = React.memo((props) => {
  console.log('PROFILE: render()')
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} statusEditable={props.statusEditable}/>
      <PostsContainer />
    </div>
  )
});

export default Profile;