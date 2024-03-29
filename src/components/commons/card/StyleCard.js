import styles from './StyleCard.module.css';
import multipleIcon from '../../../assets/images/multiple.svg';
import defaultUserImg from '../../../assets/images/null-user.png';
import { getImageApi } from '../../../utils/StringUtil';

function StyleCard({imgSrc, userImgSrc, userId, likeCount,title, content, onClick, multiple}) {
  return (
    <div
     onClick={onClick}
     className={styles.container}>
        <img alt="" className={styles.contentImage} src={getImageApi(imgSrc)} />
      <div className={styles.userContainer}>
          <img onClick={()=>{window.location.href=`/style/user/${userId}`}} className={styles.userImg} alt="" src={ !userImgSrc || userImgSrc === "" ? defaultUserImg : userImgSrc} />
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