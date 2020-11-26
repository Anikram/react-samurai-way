import React from 'react'

import s from './Message.module.css'

const MessageRight = (props) => {
  return (
    <div className={`${s.message}`}>
      <div className={`${s.messageText} ${s.right}`}>
        <p>{props.text}</p>
      </div>
      <div className={`${s.messageAvatar} ${s.floatRight}`}>
        <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
      </div>
    </div>
  )
};


export default MessageRight;