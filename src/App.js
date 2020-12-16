import './App.css';
import React from 'react';
import {Route,withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import LoginPage from "./components/Login/Login";
import LogoutPage from "./components/Login/Logout";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";


class App extends React.PureComponent {
  componentDidMount() {
    this.props.initializeApp();
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div>
          <HeaderContainer/>
          <div className={'app-wrapper'}>
            <Navbar/>
            <div className={'app-wrapper-content'}>
              <Route path='/profile/:userId?'
                     render={() => <ProfileContainer/>}/>
              <Route path='/dialogs' render={() => <DialogsContainer/>}/>
              <Route path='/music' render={() => <Music/>}/>
              <Route path='/news' render={() => <News newsPosts={this.props.store.getState().newsPage.newsPosts}/>}/>
              <Route path='/settings' render={() => <Settings/>}/>
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route path='/login' render={() => <LoginPage/>}/>
              <Route path='/logout' render={() => <LogoutPage/>}/>
            </div>
            <div>
              <FriendsContainer store={this.props.store}/>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
