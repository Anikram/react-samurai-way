import React from 'react';
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";


const Login = (props) => {

  if (!props.isAuth) <Redirect to={'/login'}/>
  if (props.isAuth) <Redirect to={'/profile'}/>

  const onSubmit=(formData) => {
    props.loginUser(formData)
  }

  return <div className={'tile'}>
    <h1>Login Page</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {loginUser})(Login);