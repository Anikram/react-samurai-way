import navClass from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={'left border tile'}>
      <div className={navClass.item}><a href="#">Profile</a></div>
      <div className={navClass.item}><a href="#">Messages</a></div>
      <div className={navClass.item}><a href="#">News</a></div>
      <div className={navClass.item}><a href="#">Music</a></div>
    </nav>
  )
};

export default Navbar;