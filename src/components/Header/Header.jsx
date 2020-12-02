import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header= (props) => {
  return (
    <header className={s.header + ' border tile'}>
      <img className={s.logo} src="https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg" alt=""/>

      <div className={s.loginBlock}>
        { props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> }
      </div>
    </header>
  )
};

export default Header;