import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
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
            <Route path='/profile' render={() => <Profile data={props.state.profilePage}/>}/>
            <Route path='/dialogs' render={() => <Dialogs data={props.state.dialogsPage}/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/news' render={() => <News newsPosts={props.state.newsPage}/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
