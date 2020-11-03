import './App.css';

function App() {
  return (
    <div className={'app-wrapper'}>
      <header className={'header'}>
        <img src="https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg" alt=""/>
      </header>
      <nav className={'nav'}>
        <div><a href="">Profile</a></div>
        <div><a href="">Messages</a></div>
        <div><a href="">News</a></div>
        <div><a href="">Music</a></div>
      </nav>
      <div className={'content'}>
        Main content
      </div>
    </div>
  );
};

export default App;
