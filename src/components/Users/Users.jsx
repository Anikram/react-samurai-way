import React from 'react';
import s from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage,totalUsersCount,onPageChanged,pageSize,followingInProgress, followUser, unfollowUser,users}) => {
  return (
    <div className={`${s.users}`}>
      <h1>Users page</h1>

      <Paginator currentPage={currentPage}
                 totalItemsCount={totalUsersCount}
                 onPageChanged={onPageChanged}
                 pageSize={pageSize} />
      {
        users.map(u => {
          return <User user={u} followingInProgress={followingInProgress} followUser={followUser} unfollowUser={unfollowUser}/>
        })
      }

    </div>
  )
}

export default Users;