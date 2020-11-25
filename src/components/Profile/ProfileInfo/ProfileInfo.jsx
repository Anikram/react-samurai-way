import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profileInfoContent}>
      {/*<img className={s.cover} src="" alt=""/>*/}
      <div className={s.panel}>
        <div className={s.avatar}>
          <img src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>

          <div className={s.nickname}>
            <h5> Nickname </h5>
          </div>
        </div>
      </div>
    </div>
)
};

export default ProfileInfo;