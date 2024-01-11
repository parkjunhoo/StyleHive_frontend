import styles from './StyleUserCard.module.css';

import StyleCardSmall from './StyleCardSmall';
import BasicButton from '../buttons/BasicButton';

function StyleUserCard({data, rank}) {
  return (
    <div className={styles.container}>
      <div className={styles.userInfoDiv}>
        <p className={styles.rankText}>{rank}</p>
        <img alt="user" src={data.userImg} className={styles.userPhoto}></img>
        <div className={styles.userNameDiv}>
          <p className={styles.userIdText}>{data.userId}</p>
          <p className={styles.followerText}>팔로워 {data.followCount}</p>
        </div>
        <BasicButton className={styles.followBtn}><p className={styles.followBtnText}>팔로우</p></BasicButton>
      </div>
      <div className={styles.postDiv}>
        {data.commList.map((i,idx)=>{
          return(
            <StyleCardSmall key={idx} imgUrl={i.firstImage} likeCount={i.likeCount}/>
          )
        })}
      </div>
    </div>
  )
}

export default StyleUserCard;