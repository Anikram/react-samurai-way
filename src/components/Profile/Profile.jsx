import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo/>
      <PostsContainer store={props.store} posts={props.store.getState().profileReducer.posts}/>
    </div>
  )
};

export default Profile;