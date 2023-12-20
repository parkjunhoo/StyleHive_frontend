import styles from './StyleCard.module.css';

function StyleCard({imgSrc, userImgSrc, userId, likeCount, content, onClick}) {
  return (
    <div
     onClick={onClick}
     className={styles.container}>
        <img alt="" className={styles.contentImage} src={imgSrc} />
      <div className={styles.userContainer}>
          <img className={styles.userImg} alt="" src={userImgSrc} />
        <p className={styles.userIdText}>{userId}</p>
        <p className={styles.likeText}>♡ {likeCount}</p>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.contentText}>{content}</p>
      </div>
    </div>
  );
}

export default StyleCard;