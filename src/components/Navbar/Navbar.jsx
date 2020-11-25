import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.left + ' border tile'}>
      <div className={s.item}><a href="#">Profile</a></div>
      <div className={s.item}><a href="#">Messages</a></div>
      <div className={s.item}><a href="#">News</a></div>
      <div className={s.item}><a href="#">Music</a></div>
    </nav>
  )
};

export default Navbar;