import React from 'react';
import Message from "./Message/Message";

import s from './Messages.module.css'

let messageData = [
  {id: 1, text: 'Who are you?'},
  {id: 2, text: 'What are you?'},
  {id: 3, text: 'Why are you?'},
  {id: 4, text: 'When are you?'},
  {id: 5, text: 'How are you?'},
];

const Messages = () => {
  return (
    <div className={s.messages}>
      <Message text={messageData[0].text}/>
      <Message text={messageData[1].text}/>
      <Message text={messageData[2].text}/>
      <Message text={messageData[3].text}/>
      <Message text={messageData[4].text}/>
    </div>
  )
};

export default Messages;