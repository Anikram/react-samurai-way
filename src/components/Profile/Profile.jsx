import React from 'react';
import Posts from "./Posts/Posts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo/>
      <Posts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
  )
};

export default Profile;