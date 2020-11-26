import React from 'react'

import s from './Message.module.css'

const MessageLeft = (props) => {
  return (
    <div className={`${s.message}`}>
      <div className={`${s.messageAvatar} ${s.floatLeft}`}>
        <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
      </div>
      <div className={`${s.messageText} ${s.left}`}>
        <p>{props.message}</p>
      </div>
    </div>
  )
};

export default MessageLeft;