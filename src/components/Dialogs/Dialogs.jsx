import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
  let dialogElements =
    props.data.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

  return (
    <div className={s.dialogs + ' tile'}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        <Messages messages={props.data.messages}/>
      </div>
    </div>
  )
};

export default Dialogs;