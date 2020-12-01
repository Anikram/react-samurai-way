import React from "react";
import s from './Users.module.css'
import * as axios from 'axios';
import defaultAvatar from '../../assets/images/male-avatar-placeholder.png'

class Users extends React.Component {

  constructor(props) {
    super(props);

    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        this.props.setUsers(response.data.items);
      });
    }
  }

  render() {
    return (
      <div className={`${s.users} tile`}>
        <h1>Usres page</h1>

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