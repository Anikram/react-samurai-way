import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import MessagesContainer from "./Messages/MessagesContainer";


const Dialogs = (props) => {

  let dialogElements =
    props.store.getState().dialogsReducer.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

  return (
    <div className={s.dialogs + ' tile'}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>

      <MessagesContainer store={props.store}/>
    </div>
  )
};

export default Dialogs;