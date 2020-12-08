import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    localStatus: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = (e) => {
    this.setState({
      editMode: false
    });

    this.props.updateUserStatus(this.state.localStatus)
  }

  updateLocalStatus = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        localStatus: e.target.value
      });
      this.deactivateEditMode();
    }
  }
  onLocalStatusChange = (e) => {
    this.setState({
      localStatus: e.target.value
    })
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
        <div className={s.status}>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
        </div>
        }
        {this.state.editMode &&
        <div className={s.status}>
          <input autoFocus={true} onChange={this.onLocalStatusChange}
                 onBlur={this.deactivateEditMode} onKeyPress={this.updateLocalStatus}
                 value={this.state.localStatus}/>
        </div>
        }
      </>
    )
  }
};

export default ProfileStatus;
