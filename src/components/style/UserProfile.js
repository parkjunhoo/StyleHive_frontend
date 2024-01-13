import styles from "./UserProfile.module.css";
import BasicButton from "../commons/buttons/BasicButton";
import defaultUserImg from '../../assets/images/null-user.png';

function UserProfile({userData}) {
  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
        <div className={styles.userImage}>
          <img alt="userImage" src={userData.userImg ? userData.userImg : defaultUserImg}></img>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>
            <p className={styles.userNameText}>{userData.userId}</p>
            <BasicButton className={styles.followBtn}><p className={styles.followBtnText}>팔로우</p></BasicButton>
            <BasicButton><span className={styles.moreBtnText}>···</span></BasicButton>
          </div>
          <div className={styles.followInfo}>
            <p className={styles.followerText}>팔로워 <span className={styles.followerNum}>{userData.followedCount}</span></p>
            <div className={styles.vertLine}></div>
            <p className={styles.followerText}>팔로잉 <span className={styles.followerNum}>{userData.followCount}</span></p>
          </div>
          <div className={styles.userSumm}>
            <p className={styles.userSummText}>{userData.userNickname}</p>
            <p className={styles.userSubText}>{userData.userIntroduce}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;