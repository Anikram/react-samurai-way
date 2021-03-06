import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {logoutUser} from "../../redux/authReducer";

class HeaderContainer extends React.Component {


  render() {
    return (

      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,{logoutUser})(HeaderContainer);