import styles from './StyleCommentPopup.module.css';
import BasicPopup from './BasicPopup';
import BasicInput from '../input/BasicInput';
import StyleCommentCard from '../card/StyleCommentCard';
import defaultUserImg from '../../../assets/images/null-user.png';
import { simpleDateFormat } from '../../../utils/StringUtil';

function StyleCommentPopup({authorId, authorImg, authorDate, data, onClose}) {
  return (
    <BasicPopup 
    onClose = {onClose}
    backgroundColor={"transparent"}>
      <div className={styles.container}>
        <div className={styles.popupHeader}>
            <div className={styles.titleDiv}>
              <div onClick={onClose} className={styles.closeBtn}>X</div>
              <div className={styles.titleText}>댓글</div>
            </div>
            <div className={styles.authorDiv}>
              <img className={styles.userPhoto} alt="author" src={ !authorImg || authorImg === "" ? defaultUserImg : authorImg} />
              <div>
                <p className={styles.userIdText}>{authorId}</p>
                <p className={styles.dateText}>{simpleDateFormat(authorDate)}</p>
              </div>
            </div>
            <div className={styles.writeDiv}>
              <img className={styles.userPhoto} alt="writer" src="https://cdn2.thecatapi.com/images/5es.jpg"></img>
              <BasicInput
              placeholder={"댓글을 남기세요..."}
              />
            </div>
        </div>
        <div className={styles.commListDiv}>
          {data ? data.map((i,idx)=>{
            return (
              <StyleCommentCard
                key={idx}
                nestedList ={i.nestedList ? i.nestedList : null} 
                userId = {i.userId}
                content = {i.commMentContents}
                date = {i.commMentDate}
                userImg = {i.userImg}
              />
            )
          }): null}
        </div>
      </div>
    </BasicPopup>
  )
}

export default StyleCommentPopup;