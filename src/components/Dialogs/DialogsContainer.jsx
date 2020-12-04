import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



class DialogsContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>

    return (
      <Dialogs
        dialogs = {this.props.dialogs}
        isAuth = {this.props.isAuth}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,{})(DialogsContainer)