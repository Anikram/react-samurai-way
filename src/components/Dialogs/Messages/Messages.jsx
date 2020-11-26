import React from 'react';
import MessageLeft  from "./Message/MessageLeft";
import MessageRight from "./Message/MessageRight";

import s from './Messages.module.css'

const Messages = (props) => {
  let messagesElements =
    props.messages.map((m,i) => {
      if (i % 2) {
        return <MessageLeft text={m.text}/>
      } else {
        return <MessageRight text={m.text}/>;
      }
    });

  return (
    <div className={s.messages}>
      {messagesElements}
    </div>
  )
};

export default Messages;