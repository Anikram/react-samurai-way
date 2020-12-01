import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <nav className={s.navbar + ' border tile'}>
        <div className={s.item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to="/dialogs">Dialogs</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to="/music">Music</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to="/news">News</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to="/users">Find users</NavLink></div>
      </nav>
    </div>
  )
};

export default Navbar;