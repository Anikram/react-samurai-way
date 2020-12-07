import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withConnectedAuthRedirect} from '../../hoc/withConnectedAuthRedirect'
import {compose} from "redux";



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

export default compose(
  connect(mapStateToProps,{}),
    withConnectedAuthRedirect
)(DialogsContainer);

