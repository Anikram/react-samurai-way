import React from 'react';
import MessageLeft from "./Message/MessageLeft";
import MessageRight from "./Message/MessageRight";

import s from './Messages.module.css'

const Messages = (props) => {
  let messagesElements =
    props.dialogsPage.messages.map((m, i) => {
      if (i % 2) {
        return <MessageLeft message={m.message}/>
      } else {
        return <MessageRight message={m.message}/>;
      }
    });

  let newMessageElement = React.createRef();


  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  }


  let updateMessageText = () => {
    props.dispatch({type: 'UPDATE-MESSAGES-TEXTAREA', message: newMessageElement.current.value});
  }


  return (
    <div className={s.messages}>
      {messagesElements}
      <textarea ref={newMessageElement} onChange={updateMessageText} value={props.dialogsPage.newMessageText}/>
      <button onClick={addMessage}>Send</button>
    </div>
  )
};

export default Messages;