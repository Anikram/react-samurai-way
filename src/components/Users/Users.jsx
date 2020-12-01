import React from "react";
import s from './Users.module.css'

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        followed: true,
        name: 'Vasya',
        age: 12,
        address: {country: 'Russia', city: 'Taganrog'},
        status: 'Думай и богатей.'
      },
      {
        id: 2, avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        name: 'Misha',
        age: 22,
        address: {country: 'Belarus', city: 'Minsk'},
        status: 'Самурй с мечем это то же самое что самурай без меча, но только с мечем.'
      },
      {
        id: 3,
        avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        followed: true,
        name: 'Ilona',
        age: 13,
        address: {country: 'Ukraine', city: 'Donetsk'},
        status: 'Похититель гробниц.'
      },
      {
        id: 4,
        avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        followed: false,
        name: 'Pasha',
        age: 23,
        address: {country: 'Russia', city: 'Moscow'},
        status: 'Я похититель сердец.'
      },
      {
        id: 5,
        avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        followed: true,
        name: 'Anton',
        age: 19,
        address: {country: 'Belarus', city: 'Grodno'},
        status: 'Думай и богатей.'
      },
      {
        id: 6,
        avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        followed: false,
        name: 'Tatiana',
        age: 16,
        address: {country: 'Ukraine', city: 'Kiev'},
        status: 'Думай и богатей.'
      },
      {
        id: 7,
        avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        followed: true,
        name: 'Sveta',
        age: 16,
        address: {country: 'Ukraine', city: 'Lviv'},
        status: 'Думай и богатей.'
      },
      {
        id: 8,
        avatarUrl: 'https://www.kosher.com/resized/open_graph/u/s/user_avatar.png',
        followed: true,
        name: 'Masha',
        age: 17,
        address: {country: 'Russia', city: 'St.Petersburg'},
        status: 'Думай и богатей.'
      },]
    );
  }

  let usersElements =
    props.users.map(u => {
      return (<div className={`${s.user}`} key={u.id}>
        <div className={`${s.left} ${s.userName}`}>
          <img src={`${u.avatarUrl}`} alt=""/>
          <h3 className={s.title}> {u.name} </h3>
        </div>
        <div className={`${s.right}`}>
          <div className={`${s.status}`}>
            <p> {u.status}</p>
          </div>
          <div className={`${s.location}`}>
            <p className={`${s.address}`}>  {u.address.city}, </p>
            <p className={`${s.address}`}> {u.address.country} </p>
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
    });

  return (
    <div className={`${s.users} tile`}>
      <h1>Usres page</h1>
      {usersElements}
    </div>

  );
}

export default Users;