import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
  let state = props.store.getState().dialogsReducer;

  let dispatch = props.store.dispatch;

  let dialogElements =
    props.store.getState().dialogsReducer.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

  return (
    <div className={s.dialogs + ' tile'}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>

      <Messages dialogsPage={state} dispatch={dispatch}/>
    </div>
  )
};

export default Dialogs;