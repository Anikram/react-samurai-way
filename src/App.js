import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";


const App = (props) => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <div className={'app-wrapper'}>
          <Navbar/>
          <div className={'app-wrapper-content'}>
            <Route path='/profile'
                   render={() => <Profile profilePage={props.state.profileReducer} dispatch={props.dispatch}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsReducer} dispatch={props.dispatch}/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/news' render={() => <News newsPage={props.state.newsReducer}/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
          <div>
            <Friends friends={props.state.friendsReducer.friends}/>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
