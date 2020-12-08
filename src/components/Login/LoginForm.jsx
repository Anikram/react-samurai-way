import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={"email"} component={'input'}/>
      </div>
      <div>
        <Field placeholder={'Password'} name={"password"} component={'input'}/>
      </div>
      <div>
        <Field component={'input'} name={"remember me"} type={'checkbox'}/> Remember me
      </div>
        <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm);

export default LoginReduxForm;