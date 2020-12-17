import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
     setStatus(props.status)
   }, [props.status])

  const activateEditMode = () => {
     if (props.profileId === props.authorizedUserId) {
        setEditMode(true)
     }
  }

  const deactivateEditMode = (e) => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const deactivateEditModeKeyPressed = (e) => {
    if (e.key === 'Enter') {
      deactivateEditMode(e)
    }
  }

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }

    return (
      <>
        {!editMode &&
        <div className={s.status}>
          <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
        </div>
        }
        {editMode &&
        <div className={s.status}>
          <input onChange={onChangeStatus} autoFocus={true}  onBlur={deactivateEditMode} onKeyPress={deactivateEditModeKeyPressed} value={status}/>
        </div>
        }

      </>
    )
};

export default ProfileStatus;
