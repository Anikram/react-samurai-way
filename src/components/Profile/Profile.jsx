import Posts from "./Posts/Posts";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={'border tile'}>
      <img className={s.cover}  src="https://im0-tub-ru.yandex.net/i?id=c9429ed3fc0171527a0e2f2ffc0ee36c&n=13" alt=""/>
      <div>
        <img className={s.avatar} src="https://www.kosher.com/resized/open_graph/u/s/user_avatar.png" alt=""/>
        <div className={s.nickname}>
          <h5>Nickname</h5>
        </div>
      </div>
      <Posts/>
    </div>
  )
};

export default Profile;