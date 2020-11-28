import React from 'react';
import MessageLeft from "./Message/MessageLeft";
import MessageRight from "./Message/MessageRight";
import s from './Messages.module.css'

const Messages = (props) => {

  let messagesElements =
    props.messages.map((m, i) => {
      if (i % 2) {
        return <MessageLeft message={m.message}/>
      } else {
        return <MessageRight message={m.message}/>;
      }
    });

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onMessageTextChange = (e) => {
    let message = e.target.value;
    props.changeMessageText(message);
  }

  return (
    <div className={s.messages}>
      {messagesElements}
      <textarea onChange={onMessageTextChange} value={props.newMessageText}/>
      <button onClick={onSendMessageClick}>Send</button>
    </div>
  )
};

export default Messages;