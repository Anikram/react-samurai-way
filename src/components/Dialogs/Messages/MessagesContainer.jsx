import React from 'react';
import MessageLeft from "./Message/MessageLeft";
import MessageRight from "./Message/MessageRight";
import s from './Messages.module.css'
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

  let state = props.store.getState().dialogsReducer;
  let messages = state.messages;
  let newMessageText = state.newMessageText;
  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }
  let changeMessageText = (message) => {
    props.store.dispatch(updateMessageActionCreator(message));
  }

  return (
    <Messages sendMessage={sendMessage} newMessageText={newMessageText} messages={messages}
              changeMessageText={changeMessageText}/>
  )
};

export default MessagesContainer;