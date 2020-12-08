import React from 'react';
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";


const Logout = (props) => {

  return <div className={'tile'}>
    <h1>Good bye!</h1>
  </div>
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {loginUser})(Logout);