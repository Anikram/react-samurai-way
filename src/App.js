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
import {listenTextArea} from "./redux/state";

const App = (props) => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <div className={'app-wrapper'}>
          <Navbar/>
          <div className={'app-wrapper-content'}>
            <Route path='/profile' render={() => <Profile data={props.state.profilePage} addPost={props.addPost} listenTextArea={listenTextArea}/>}/>
            <Route path='/dialogs' render={() => <Dialogs data={props.state.dialogsPage}/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/news' render={() => <News newsPosts={props.state.newsPage}/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
          <div>
            <Friends data={props.state.friendsPage}/>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
