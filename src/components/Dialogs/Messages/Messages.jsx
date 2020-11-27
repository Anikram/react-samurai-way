import React from 'react';
import MessageLeft from "./Message/MessageLeft";
import MessageRight from "./Message/MessageRight";
import s from './Messages.module.css'
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogsReducer";

const Messages = (props) => {

  let newMessageText = props.dialogsPage.newMessageText;
  let messagesElements =
    props.dialogsPage.messages.map((m, i) => {
      if (i % 2) {
        return <MessageLeft message={m.message}/>
      } else {
        return <MessageRight message={m.message}/>;
      }
    });

  let onSendMessageClick = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageTextChange = (e) => {
    let message = e.target.value;
    props.dispatch(updateMessageActionCreator(message));
  }

  return (
    <div className={s.messages}>
      {messagesElements}
      <textarea onChange={onMessageTextChange} value={newMessageText}/>
      <button onClick={onSendMessageClick}>Send</button>
    </div>
  )
};

export default Messages;