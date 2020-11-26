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

  let newMessageElement = React.createRef();


  let addMessage = () => {
    props.addMessage();
  }


  let listenTextArea = () => {
    props.listenMessagesTextArea(newMessageElement.current.value);
  }


  return (
    <div className={s.messages}>
      {messagesElements}
      <textarea ref={newMessageElement} onChange={listenTextArea} value={props.newMessageText}/>
      <button onClick={addMessage}>Send</button>
    </div>
  )
};

export default Messages;