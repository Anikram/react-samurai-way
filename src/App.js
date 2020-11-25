import './App.css';
import React from 'react';
import {Route,BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Music from "./components/PlacegolderComponents/Music";
import News from "./components/PlacegolderComponents/News";
import Settings from "./components/PlacegolderComponents/Settings";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <div className={'app-wrapper'}>
          <Navbar/>
          <div className={'app-wrapper-content'}>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
