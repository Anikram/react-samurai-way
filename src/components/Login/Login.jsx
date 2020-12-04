import React from 'react';
import {Redirect} from "react-router-dom";

const Login = (props) => {

  if (!props.isAuth) <Redirect to={'/login'}/>

  return <div className={'tile'}>
    <h1>Login Page</h1>
    <h2>Please authorize to proceed!</h2>
  </div>
}

export default Login;