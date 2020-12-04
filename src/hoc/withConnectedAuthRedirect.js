import {Redirect} from "react-router-dom";
import React from 'react';
import {connect} from "react-redux";

export const withConnectedAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>

      return <Component {...this.props}/>
    }
  }

  const mapStateToProps = (state) => {
    return { isAuth: state.auth.isAuth }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps, {})(RedirectComponent);

  return ConnectedAuthRedirectComponent
}