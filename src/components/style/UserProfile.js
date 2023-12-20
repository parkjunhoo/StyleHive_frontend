import styles from "./UserProfile.module.css";
import BasicButton from "../commons/buttons/BasicButton";

function UserProfile() {

  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
        <div className={styles.userImage}>
          <img alt="userImage" src="https://i.namu.wiki/i/5uZfHmW_mse1JTTHDavqJ5Rh0DbyCB3bpuQdeq_h3gxc3kWdagjaBxehv-6t5Z7Rwwo8PPFH7bOqldByJ4MfhA.webp"></img>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>
            <p className={styles.userNameText}>MakNoon</p>
            <BasicButton className={styles.followBtn}><p className={styles.followBtnText}>팔로우</p></BasicButton>
            <BasicButton><span className={styles.moreBtnText}>···</span></BasicButton>
          </div>
          <div className={styles.followInfo}>
            <p className={styles.followerText}>팔로워 <span className={styles.followerNum}>5</span></p>
            <div className={styles.vertLine}></div>
            <p className={styles.followerText}>팔로잉 <span className={styles.followerNum}>0</span></p>
          </div>
          <div className={styles.userSumm}>
            <p className={styles.userSummText}>막눈</p>
            <p className={styles.userSubText}>안녕하세요. 막눈입니다. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;