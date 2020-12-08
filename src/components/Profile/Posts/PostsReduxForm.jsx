import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import s from "./Posts.module.css";


const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.textarea} name={'newPostText'} component={'textarea'}
               value={props.newPostText}/>
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
