import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Forms/FormControls";
import s from "./Login.module.css"
import {
  email,
  maxLengthValidatorCreator,
  minLengthValidatorCreator,
  required
} from "../../helpers/validators/vlidators";


const maxLength20 = maxLengthValidatorCreator(20);
const minLength5 = minLengthValidatorCreator(5);

const LoginForm = (props) => {
  return (
    <form className={s.loginForm} onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={"email"} component={Input} validate={[required, maxLength20, email]}/>
      </div>
      <div>
        <Field placeholder={'Password'} name={"password"} component={Input} validate={[required, maxLength20, minLength5]}/>
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input}/> Remember me
      </div>
        <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm);

export default LoginReduxForm;