import styles from './StyleCard.module.css';
import multipleIcon from '../../../assets/images/multiple.svg';

function StyleCard({imgSrc, userImgSrc, userId, likeCount,title, content, onClick, multiple}) {
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
        <p className={styles.contentText}>{title}</p>
        <p className={styles.contentText}>{content}</p>
      </div>
      {multiple ? 
      <div className={styles.multipleIconDiv}>
        <img alt="multiple" className={styles.multipleIcon} src={multipleIcon} /> 
      </div>
      : null}
    </div>
  );
}

export default StyleCard;