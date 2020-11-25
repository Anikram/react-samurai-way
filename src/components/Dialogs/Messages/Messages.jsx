import React from 'react';
import Message from "./Message/Message";

import s from './Messages.module.css'

const Messages = () => {
  return (
    <div className={s.messages}>
      <Message text='Hello! Who are you?'/>
      <Message text='Hello! What are you?'/>
      <Message text='Hello! Why are you?'/>
      <Message text='Hello! When are you?'/>
      <Message text='Hello! How are you?'/>
    </div>
  )
};

export default Messages;