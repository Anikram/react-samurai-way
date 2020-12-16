import React from 'react';
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";


const Login = ({isAuth, loginUser, captchaUrl}) => {

  if (isAuth) return <Redirect to={'/profile'}/>

  const onSubmit = (formData) => {
    loginUser(formData)
  }

  return <div className={'tile'}>
    <h1>Login Page</h1>
    <LoginReduxForm
      onSubmit={onSubmit}
      captchaUrl={captchaUrl}
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