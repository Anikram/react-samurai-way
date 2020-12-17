import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/images/male-avatar-placeholder.png'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHook";
import {FollowUnfollowButton} from "../../Common/Buttons/FollowUnfollow";

const ProfileInfo = ({profile, updateUserStatus, statusEditable, status, isFriend, currentUser, ...props}) => {
  if (!profile) {
    return <Preloader/>
  }

  let contacts = profile.contacts;
  const contactsElements = Object.keys(contacts).map((key, index) => {
      if (contacts[key]) {
        return <div className={s.contact} key={index}>{key}: <button>{contacts[key]}</button></div>
      } else {
        return <div className={s.contact} key={index}>{key}: </div>
      }
    }
  )

  return (
    <div className={s.profileContent}>
      <div className={s.profileBanner}>
        <div className={s.panel}>
          <div className={s.avatar}>
            <img src={profile.photos.large != null ? profile.photos.large : defaultAvatar} alt=''/>

            <div className={s.nickname}>
              <h5> {profile.fullName} </h5>
            </div>

            { !currentUser ? <FollowUnfollowButton userId={profile.userId}
                                  followed={isFriend}
                                  followingInProgress={props.followingInProgress}
                                  unfollowUser={props.unfollowUser}
                                              followUser={props.followUser}/> : <div></div>
            }


          </div>
        </div>
      </div>

      <ProfileStatusHooks status={status} updateUserStatus={updateUserStatus} statusEditable={statusEditable}/>

      <div className={s.info}>
        <div className={s.contacts}>
          {contactsElements}
        </div>

        <div className={s.jobSection}>
          <div className={s.openForHiring}>I'm open for hiring!</div>
          <div className={s.jobDescription}>"{profile.lookingForAJobDescription}"</div>
        </div>
      </div>

    </div>
  )
}


export default ProfileInfo;