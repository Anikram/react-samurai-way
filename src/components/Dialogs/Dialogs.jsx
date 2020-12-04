import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
  let dialogElements =
    props.dialogs.map(d => <Dialog name={d.name} key={d.id} id={d.id}/>);

  return (
    <div className={s.dialogs + ' tile'}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>

      <MessagesContainer />
    </div>
  )
};

export default Dialogs;