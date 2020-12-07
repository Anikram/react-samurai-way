import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/images/male-avatar-placeholder.png'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  let contacts = props.profile.contacts;
  const contactsElements = Object.keys(contacts).map(key => {
      if (contacts[key]) {
        return <div className={s.contact}>{key}: <a href='#'>{contacts[key]}</a></div>
      } else {
        return <div className={s.contact}>{key}: </div>
      }
    }
  )

  return (
    <div className={s.profileContent}>
      <div className={s.profileBanner}>
        <div className={s.panel}>
          <div className={s.avatar}>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultAvatar} alt=''/>

            <div className={s.nickname}>
              <h5> {props.profile.fullName} </h5>
            </div>
          </div>
        </div>
      </div>

      <ProfileStatus status={props.profile.aboutMe}/>

      <div className={s.info}>
        <div className={s.contacts}>
          {contactsElements}
        </div>

        <div className={s.jobSection}>
          <div className={s.openForHiring}>I'm open for hiring!</div>
          <div className={s.jobDescription}>"{props.profile.lookingForAJobDescription}"</div>
        </div>
      </div>

    </div>
  )
}


export default ProfileInfo;