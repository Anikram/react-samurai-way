import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";

let dialogData = [
  {id: 1, name: 'Alexa'},
  {id: 2, name: 'Balexa'},
  {id: 3, name: 'Calexa'},
  {id: 4, name: 'Dalexa'},
  {id: 5, name: 'Ealexa'},
];


const Dialogs = () => {
  return (
    <div className={s.dialogs + ' tile'}>
      <div className={s.dialogItems}>
        <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
        <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
        <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
        <Dialog name={dialogData[3].name} id={dialogData[3].id}/>
        <Dialog name={dialogData[4].name} id={dialogData[4].id}/>
      </div>
      <div className={s.messages}>
        <Messages />
      </div>
    </div>
  )
};

export default Dialogs;