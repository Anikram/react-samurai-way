import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Dialog.module.css'

const Dialog = (props) => {
  return (
    <div className={`${s.dialog}`}>
      <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
        <NavLink  to={"/dialogs/" + props.id} activeClassName={s.active}> {props.name} </NavLink>
    </div>
  )
};

export default Dialog;