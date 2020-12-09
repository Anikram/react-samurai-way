import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../../Common/Forms/FormControls";
import {maxLengthValidatorCreator, required} from "../../../helpers/validators/vlidators";

const maxLength80 = maxLengthValidatorCreator(80);

const MessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={'newMessageText'} value={props.newMessageText} validate={[required, maxLength80]}/>
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