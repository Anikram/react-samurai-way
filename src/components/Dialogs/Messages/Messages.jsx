import React from 'react';
import Message from "./Message/Message";

import s from './Messages.module.css'

const Messages = (props) => {
  let messagesElements =
    props.messages.map(m => <Message text={m.text}/>);
  return (
    <div className={s.messages}>
      {messagesElements}
    </div>
  )
};

export default Messages;