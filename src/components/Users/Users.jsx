import React from 'react';
import s from "./Users.module.css";
import defaultAvatar from "../../assets/images/male-avatar-placeholder.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/UsersApi";
import {toggleFollowingInProgress} from "../../redux/usersReducer";


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

        pages.map(page => {
          return <span onClick={() => {
            props.onPageChanged(page)
          }} className={`${props.currentPage === page && s.selectedPage} ${s.pageSelector}`}> {page} </span>
        })
      }

      {
        props.users.map(u => {
          return (<div className={`${s.user}`} key={u.id}>
            <NavLink to={`/profile/${u.id}`}>
              <div className={`${s.left} ${s.userName}`}>
                <img src={u.photos.small != null ? u.photos.small : defaultAvatar} alt=''/>
                <h3 className={s.title}> {u.name} </h3>
              </div>
            </NavLink>
            <div className={`${s.right}`}>
              <div className={`${s.status}`}>
                <p> {u.status}</p>
              </div>
              <div className={`${s.location}`}>
                <p className={`${s.address}`}> Zoopolis, </p>
                <p className={`${s.address}`}> World Wide </p>
              </div>
            </div>
            <div className={`${s.actions}`}>
              {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingInProgress(true, u.id);

                  usersAPI.toggleFollow('delete', u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unFollowUser(u.id)
                    }
                    props.toggleFollowingInProgress(false, u.id);
                  });

                }} className={`${s.button} ${s.unfollow}`}> Un follow </button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingInProgress(true, u.id);
                  usersAPI.toggleFollow('post', u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.followUser(u.id)
                    }
                    props.toggleFollowingInProgress(false, u.id);
                  });

                }} className={`${s.button} ${s.follow}`}> Follow </button>
              }
            </div>

          </div>)
        })
      }

    </div>
  )
}

export default Users;