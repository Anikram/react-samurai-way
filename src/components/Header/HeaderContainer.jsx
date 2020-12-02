import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Header from "./Header";
import {login, logout, setAuthUserData, toggleIsFetching} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
      withCredentials: true
    })
      .then((response) => {
        if (response.data.resultCode === 0){
          let {id, login, email} = response.data.data;
          this.props.setAuthUserData(id, login, email)
        }
      });
  };

  render() {
    return (
      <Header {...this.props}/>
      // <Header userId={this.props.userId} email={this.props.email} login={this.props.login}
      //         isFetching={this.props.isFetching} login={this.login} logout={this.logout}
      //         toggleIsFetching={this.toggleIsFetching}/>
    )
  }
}

// export default HeaderContainer;

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
  }
}

// let WithRouterHeaderContainer =  withRouter(HeaderContainer);

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);