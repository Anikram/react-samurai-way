import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import s from "./Posts.module.css";
import {required, maxLengthValidatorCreator} from "../../../helpers/validators/vlidators";
import {Textarea} from "../../Common/Forms/FormControls";

const maxLength15 = maxLengthValidatorCreator(15);

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.textarea} name={'newPostText'} component={Textarea}
               value={props.newPostText} validate={[required, maxLength15 ]}/>
      </div>
      <div>
        <button>
          Add post
        </button>
      </div>
    </form>
  )
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('PostsForm'))
}

const PostsReduxForm = reduxForm({form: 'PostsForm',onSubmitSuccess: afterSubmit})(PostsForm);

export default PostsReduxForm;
