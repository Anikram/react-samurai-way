import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withConnectedAuthRedirect} from '../../hoc/withConnectedAuthRedirect'



class DialogsContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Dialogs
        dialogs = {this.props.dialogs}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  }
}

let ConnectedAuthRedirectComponent = withConnectedAuthRedirect(DialogsContainer)

export default connect(mapStateToProps,{})(ConnectedAuthRedirectComponent)