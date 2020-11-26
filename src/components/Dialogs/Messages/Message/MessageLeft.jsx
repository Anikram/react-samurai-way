import React from 'react'

import s from './Message.module.css'

const MessageLeft = (props) => {
  return (
    <div className={`${s.message}`}>
      <div className={`${s.messageAvatar} ${s.messageAvatarLeft}`}>
        <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
      </div>
      <div className={`${s.messageText} ${s.left}`}>
        <p>{props.text}</p>
      </div>
    </div>
  )
};

export default MessageLeft;