import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo/>
      <PostsContainer />
    </div>
  )
};

export default Profile;