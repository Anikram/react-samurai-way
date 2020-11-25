import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";

const Dialogs = () => {
  return (
    <div className={s.dialogs + ' tile'}>
      <div className={s.dialogItems}>
        <Dialog name='Alexa' id='1'/>
        <Dialog name='Balexa' id='2'/>
        <Dialog name='Calexa' id='3'/>
        <Dialog name='Dalexa' id='4'/>
        <Dialog name='Ealexa' id='5'/>
      </div>
      <div className={s.messages}>
        <Messages />
      </div>
    </div>
  )
};

export default Dialogs;