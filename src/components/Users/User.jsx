import React from 'react';
import s from "./Users.module.css";
import defaultAvatar from "../../assets/images/male-avatar-placeholder.png";
import {NavLink} from "react-router-dom";
import {FollowUnfollowButton} from "../Common/Buttons/FollowUnfollow";


let User = ({user,followingInProgress, followUser, unfollowUser}) => {
  return (
    <div className={`${s.user}`} key={user.id}>
      <NavLink to={`/profile/${user.id}`}>
        <div className={`${s.left} ${s.userName}`}>
          <img src={user.photos.small != null ? user.photos.small : defaultAvatar} alt=''/>
          <h3 className={s.title}> {user.name} </h3>
        </div>
      </NavLink>
      <div className={`${s.right}`}>
        <div className={`${s.status}`}>
          <p> {user.status}</p>
        </div>
        <div className={`${s.location}`}>
          <p className={`${s.address}`}> Zoopolis, </p>
          <p className={`${s.address}`}> World Wide </p>
        </div>
      </div>
      <div className={`${s.actions}`}>

        <FollowUnfollowButton userId={user.id} followed={user.followed} followingInProgress={followingInProgress} followUser={followUser} unfollowUser={unfollowUser}/>
      </div>

    </div>
  )
}

export default User;