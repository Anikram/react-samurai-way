import React from 'react';
import MessageLeft from "./Message/MessageLeft";
import MessageRight from "./Message/MessageRight";
import s from './Messages.module.css'
import MessagesReduxForm from "./MessagesReduxForm";

const Messages = (props) => {

  let messagesElements =
    props.messages.map((m, i) => {
      if (i % 2) {
        return <MessageLeft message={m.message} key={m.id}/>
      } else {
        return <MessageRight message={m.message} key={m.id}/>;
      }
    });

  let onSendMessageClick = (formData) => {
    props.sendMessage(formData.newMessageText);
  }

  // let onMessageTextChange = (e) => {
  //   let message = e.target.value;
  //   props.changeMessageText(message);
  // }

  return (
    <div className={s.messages}>
      {messagesElements}
      <MessagesReduxForm onSubmit={onSendMessageClick}/>
    </div>
  )
};

export default Messages;