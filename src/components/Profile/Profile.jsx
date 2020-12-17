import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = React.memo((props) => {
  return (
    <div className={s.profileContent + ' border tile'}>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateUserStatus={props.updateUserStatus}
                   statusEditable={props.statusEditable}
                   followUser={props.followUser}
                   unfollowUser={props.unfollowUser}
                   followingInProgress={props.followingInProgress}
                   profileIsFriend={props.profileIsFriend}
                   authorizedUserId={props.authorizedUserId}
                   />
      <PostsContainer />
    </div>
  )
});

export default Profile;