import preloader from "../../../assets/images/preloader.svg";
import React from "react";
import s from './Preloader.module.css'

let Preloader = () => {
  return (<div className={s.preloaderContainer}>
    <img src={preloader} alt={'preloader image'}/>
  </div>
  )
}

export default Preloader;
