import styles from './StyleCardSmall.module.css';

function StyleCardSmall ({imgUrl, likeCount, onClick, style}) {
  return (
    <div 
      onClick={onClick}
      style={style}
      className={styles.container}>
        <img src={imgUrl} alt="post"></img>
        <div className={styles.likeCountDiv}>
          <p className={styles.likeCountText}>♥ {likeCount}</p>
        </div>
    </div>
  )
}

export default StyleCardSmall;