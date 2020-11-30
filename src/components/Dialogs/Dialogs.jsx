import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import StoreContext from "../../StoreContext";


const Dialogs = () => {


  return (
    <StoreContext.Consumer>
      {store => {

        let dialogElements =
          store.getState().dialogsReducer.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

        return (
          <div className={s.dialogs + ' tile'}>
            <div className={s.dialogItems}>
              {dialogElements}
            </div>

            <MessagesContainer store={store}/>
          </div>
        )
      }
      }

    </StoreContext.Consumer>
  )
};

export default Dialogs;