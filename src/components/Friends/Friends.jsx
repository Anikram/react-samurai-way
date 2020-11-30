import React from 'react'
import s from './Friends.module.css'


const Friends = (props) => {

  const Friend = (props) => {
    return (
      <div className={s.friend}><img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
        <p>{props.name}</p></div>
    )
  };

  let friends = props.store.getState().friendsPage.friends;

  let friendsElements = friends.map(f => <Friend name={f.name} key={f.id}/>);
  return (
    <div className={`${s.friends} tile flex-container`}><h3>Friends</h3>
      {friendsElements}
    </div>
  )
};

export default Friends;