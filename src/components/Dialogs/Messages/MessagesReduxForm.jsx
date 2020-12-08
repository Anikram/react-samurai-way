import React from 'react';
// import s from './Messages.module.css'
import {Field, reduxForm, reset} from "redux-form";

const MessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newMessageText'} value={props.newMessageText}/>
      <button>Send</button>
    </form>
  )
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset('MessagesForm'))
}

const MessagesReduxForm = reduxForm({
  form: 'MessagesForm',
  onSubmitSuccess: afterSubmit
})(MessagesForm)

export default MessagesReduxForm;