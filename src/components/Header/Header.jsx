import headerClass from './Header.module.css';

const Header= () => {
  return (
    <header className={headerClass.header + ' border tile'}>
      <img className={headerClass.logo} src="https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg" alt=""/>
    </header>
  )
};

export default Header;