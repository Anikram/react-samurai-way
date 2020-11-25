import React from 'react'

import s from './Message.module.css'

const Message = (props) => {
  return (
    <div className={s.message}>
      <p>{props.text}</p>
    </div>
  )
};

export default Message;