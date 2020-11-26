import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
  let dialogElements =
    props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

  return (
    <div className={s.dialogs + ' tile'}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>

      <Messages dialogsPage={props.dialogsPage} dispatch={props.dispatch}/>
    </div>
  )
};

export default Dialogs;