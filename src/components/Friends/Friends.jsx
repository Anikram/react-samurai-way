import React from 'react'
import s from './Friends.module.css'
import StoreContext from "../../StoreContext";


const Friends = () => {
  return (
    <StoreContext.Consumer>
      {
      (store) => {
        const Friend = (props) => {
          return (
            <div className={s.friend}><img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
              <p>{props.name}</p></div>
          )
        };

        let friends = store.getState().friendsReducer.friends;

        let friendsElements = friends.map(f => <Friend name={f.name}/>);
        return (
        <div className={`${s.friends} tile flex-container`}><h3>Friends</h3>
          {friendsElements}
        </div>
        )
      }
    }
    </StoreContext.Consumer>
  )
};

export default Friends;