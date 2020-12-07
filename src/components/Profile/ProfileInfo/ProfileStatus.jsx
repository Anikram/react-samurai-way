import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    localStatus: 'This is the status'
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  updateLocalStatus = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        localStatus: e.target.value
      });
      this.deactivateEditMode();
    }
  }
  changeLocalStatus = (e) => {
    this.setState({
      localStatus: e.target.value
    })
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
        <div className={s.status}>
          <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.localStatus}</span>
        </div>
        }
        {this.state.editMode &&
        <div className={s.status}>
          <input autoFocus={true} onChange={this.changeLocalStatus.bind(this)}
                 onBlur={this.deactivateEditMode.bind(this)} onKeyPress={this.updateLocalStatus.bind(this)}
                 value={this.state.localStatus}/>
        </div>
        }
      </>
    )
  }
};

export default ProfileStatus;
