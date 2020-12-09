import React from 'react';
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";
import s from "./Login.module.css";


const Login = (props) => {

  // if (!props.isAuth) <Redirect to={'/login'}/>
  if (props.isAuth) return <Redirect to={'/profile'}/>

  const onSubmit = (formData) => {
    props.loginUser(formData)
  }

  return <div className={'tile'}>
    <h1>Login Page</h1>
    <LoginReduxForm
      onSubmit={onSubmit}
      captchaUrl={props.captchaUrl}
    />
  </div>
}

const mapStateToProps = (state) => {
 return {
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
 }
}

export default connect(mapStateToProps, {loginUser})(Login);