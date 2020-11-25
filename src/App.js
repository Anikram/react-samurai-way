import './App.css';
import React from 'react';
import {Route,BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Music from "./components/PlacegolderComponents/Music";
import News from "./components/News/News";
import Settings from "./components/PlacegolderComponents/Settings";
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
            <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
            <Route path='/dialogs' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' render={() => <News newsPosts={props.newsPosts}/>}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
