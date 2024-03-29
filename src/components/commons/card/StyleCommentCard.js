import styles from './StyleCommentCard.module.css';
import defaultUserImg from '../../../assets/images/null-user.png';
import { simpleDateFormat } from '../../../utils/StringUtil';

function StyleCommentCard({commentId ,userId, content, date, userImg, nestedList, onGroup, isSumm}) {
  return (
    <div className={styles.container}>
      <div className={styles.commentDiv}>
        <img src={userImg ? userImg : defaultUserImg } alt="user" className={styles.userPhoto}/>
        <div>
          <div className={styles.commentInfoDiv}>
            <p className={styles.userIdText}>{userId}</p>
            <p className={styles.contentText}>{content}</p>
          </div>
          <div className={styles.flexDiv}>
            <p className={styles.dateText}>{simpleDateFormat(date)}</p>
            {!isSumm ? <p onClick={()=>{onGroup(commentId, userId)}} className={styles.nestedAddText}>답글 쓰기</p> : null}
          </div>
        </div>
      </div>
      <div className={styles.nestedDiv}>
        {nestedList ? nestedList.map((i,idx)=>{
          return (
            <StyleCommentCard 
              key={idx}
              nestedList ={i.nestedList ? i.nestedList : null} 
              userId = {i.userId}
              content = {i.commMentContents}
              date = {i.commMentDate}
              userImg = {i.userImg}
              onGroup = {onGroup}
            />
          )
        }): null}
      </div>
    </div>
  )
}

export default StyleCommentCard;