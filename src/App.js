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
                   render={() => <Profile profilePage={props.store.getState().profilePage}
                                          addPost={props.store.addPost.bind(props.store)}
                                          listenPostsTextArea={props.store.listenPostsTextArea.bind(props.store)}
                                          newPostText={props.store.getState().profilePage.newPostText}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.store.getState().dialogsPage}
                                                          addMessage={props.store.addMessage.bind(props.store)}
                                                          listenMessagesTextArea={props.store.listenMessagesTextArea.bind(props.store)}
                                                          newMessageText={props.store.getState().dialogsPage.newMessageText}/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/news' render={() => <News store={props.store}/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
          <div>
            <Friends store={props.store}/>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
