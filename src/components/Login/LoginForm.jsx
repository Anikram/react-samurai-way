import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Forms/FormControls";
import s from "./Login.module.css"
import formStyle from "./../Common/Forms/FormControls.module.css";
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
      {props.error && <div className={formStyle.formGroupError}>
        {props.error}
      </div>
      }
      <div>
        <Field placeholder={'Email'} name={"email"} component={Input} validate={[required, maxLength20, email]}/>
      </div>
      <div>
        <Field placeholder={'Password'} type='password' name={"password"} component={Input}
               validate={[required, maxLength20, minLength5]}/>
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input}/> Remember me
      </div>
      <button>Login</button>
      {props.captchaUrl && <div className={s.captchaDiv}>
        <img
          src={props.captchaUrl}
          alt=""/>
        <Field placeholder={'captcha'} name={"captcha"} component={Input} validate={[required]}/>
      </div>}
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

export default LoginReduxForm;