import React from 'react';
import s from "./Users.module.css";
import defaultAvatar from "../../assets/images/male-avatar-placeholder.png";


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={`${s.users}`}>
      <h1>Users page</h1>
      {

        pages.map(p => {
          return <span onClick={() => {props.onPageChanged(p)}} className={`${props.currentPage === p && s.selectedPage} ${s.pageSelector}`}> {p} </span>})
      }

      {
        props.users.map(u => {
          return (<div className={`${s.user}`} key={u.id}>
            <div className={`${s.left} ${s.userName}`}>
              <img src={u.photos.small != null ? u.photos.small : defaultAvatar } alt=''/>
              <h3 className={s.title}> {u.name} </h3>
            </div>
            <div className={`${s.right}`}>
              <div className={`${s.status}`}>
                <p> {u.status}</p>
              </div>
              <div className={`${s.location}`}>
                <p className={`${s.address}`}>  Zoopolis, </p>
                <p className={`${s.address}`}> World Wide </p>
              </div>
            </div>
            <div className={`${s.actions}`}>
              {u.followed
                ? <div onClick={() => {
                  props.unFollowUser(u.id)
                }} className={`${s.button} ${s.unfollow}`}> Un follow </div>
                : <div onClick={() => {
                  props.followUser(u.id)
                }} className={`${s.button} ${s.follow}`}> Follow </div>
              }
            </div>

          </div>)
        })
      }

    </div>
  )
}

export default Users;