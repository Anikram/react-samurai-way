import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <HeaderContainer />
        <div className={'app-wrapper'}>
          <Navbar/>
          <div className={'app-wrapper-content'}>
            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer />}/>
            <Route path='/dialogs' render={() => <Dialogs store={props.store} />}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/news' render={() => <News store={props.store} />}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <UsersContainer />}/>
          </div>
          <div>
            <FriendsContainer store={props.store} />
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
