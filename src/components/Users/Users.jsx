import React from "react";
import s from './Users.module.css'
import * as axios from 'axios';
import defaultAvatar from '../../assets/images/male-avatar-placeholder.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  };

  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={`${s.users} tile`}>
        <h1>Users page</h1>

        {
          pages.map(p => {
          return <span onClick={() => {this.onPageChanged(p)}} className={`${this.props.currentPage === p && s.selectedPage} ${s.pageSelector}`}> {p} </span>})
        }

        {
          this.props.users.map(u => {
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
                    this.props.unFollowUser(u.id)
                  }} className={`${s.button} ${s.unfollow}`}> Un follow </div>
                  : <div onClick={() => {
                    this.props.followUser(u.id)
                  }} className={`${s.button} ${s.follow}`}> Follow </div>
                }
              </div>

            </div>)
          })
        }

      </div>

    );
  };
};

export default Users;