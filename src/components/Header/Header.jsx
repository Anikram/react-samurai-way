import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  debugger
  return (
    <header className={s.header + ' border tile'}>
      <img className={s.logo} src="https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg" alt=""/>

      <div className={s.loginBlock}>
        {props.isAuth ? <div>
          {props.login}
          <div>
            <NavLink to='/logout' onClick={props.logoutUser}>Logout</NavLink>
          </div>
        </div> : <div>
          <NavLink to='/login'>Login</NavLink>
        </div>
        }
      </div>
    </header>
  )
};

export default Header;