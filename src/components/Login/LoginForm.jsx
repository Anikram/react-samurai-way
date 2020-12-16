import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/Forms/FormControls";
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

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form className={s.loginForm} onSubmit={handleSubmit}>
      {error && <div className={formStyle.formGroupError}>
        {error}
      </div>
      }
      {createField('email', 'email', [required, maxLength20, email], Input)}
      {createField('Password', 'password', [required, maxLength20, minLength5], Input, {type: 'password'})}
      {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}

      <button>Login</button>
      {captchaUrl && <div className={s.captchaDiv}>
        <img
          src={captchaUrl}
          alt=""/>
        <Field placeholder={'captcha'} name={"captcha"} component={Input} validate={[required]}/>
      </div>}
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

export default LoginReduxForm;