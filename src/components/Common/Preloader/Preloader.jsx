import preloader from "../../../assets/images/preloader.svg";
import React from "react";
import s from './Preloader.module.css'

let Preloader = () => {
  return (<div className={s.preloaderContainer}>
    <img src={preloader}/>
  </div>
  )
}

export default Preloader;
