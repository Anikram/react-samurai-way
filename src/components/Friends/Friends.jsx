import React from 'react'
import s from './Friends.module.css'
import defaultAvatar from '../../assets/images/male-avatar-placeholder.png'
import {NavLink} from "react-router-dom";


const Friends = (props) => {
  debugger

  const Friend = (props) => {
    return (
      <NavLink to={`/profile/${props.id}`}>
        <div className={s.friend}>{props.avatar ? <img src={props.avatar} alt=""/>  : <img src={defaultAvatar} alt=""/>  }
        <p>{props.name}</p></div>
      </NavLink>
    )
  };

  let friendsElements = props.friends.map(f => <Friend name={f.name} key={f.id} id={f.id} avatar={f.photos.small}/>);
  return (
    <div className={`${s.friends} tile flex-container`}><h3>Friends</h3>
      {friendsElements}
    </div>
  )
};

export default Friends;