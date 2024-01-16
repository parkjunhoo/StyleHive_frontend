import styles from './StyleCommentPopup.module.css';
import BasicPopup from './BasicPopup';
import {BasicInput} from '../input/BasicInput';
import StyleCommentCard from '../card/StyleCommentCard';
import defaultUserImg from '../../../assets/images/null-user.png';
import { simpleDateFormat } from '../../../utils/StringUtil';
import { useState, useEffect } from 'react';

function StyleCommentPopup({authorId, authorImg, authorDate, data, onClose, onReg, groupId, onGroup, groupMessage, onGroupCancle}) {

  const [typing, setTyping] = useState(false);
  const [inputText, setInputText] = useState("");

  const checkInputValue = (e) => {
    const val = e.target.value;
    const tp = val.length > 0;
    setInputText(val);
    setTyping(tp);
  }

  const onRegBtnClick = () => {
    onReg(inputText, groupId);
    setInputText("");
  }

  useEffect(()=>{
    if(groupMessage) setInputText(`@${groupMessage} `);
  },[groupMessage])

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
            {groupMessage ? <div className={styles.groupMessageDiv}>
              <p className={styles.groupMessageText}>{groupMessage}님에게 답글쓰기</p>
              <p onClick={()=>{onGroupCancle(); setInputText("");}} className={styles.groupCancleBtn}>X</p>
            </div>
             : null}
            <div className={styles.writeDiv}>
              <img className={styles.userPhoto} alt="writer" src="https://cdn2.thecatapi.com/images/5es.jpg"></img>
              <BasicInput
                value={inputText}
                onChange={(e)=>{checkInputValue(e)}}
                style={{padding:"12px 48px 12px 12px"}}
                placeholder={"댓글을 남기세요..."}
              />
              {typing ? <div onClick={onRegBtnClick} className={styles.commentRegBtn}>등록</div> : null}
            </div>
        </div>
        <div className={styles.commListDiv}>
          {data ? data.map((i,idx)=>{
            return (
              <StyleCommentCard
                key={idx}
                commentId = {i.commMentNo}
                nestedList ={i.nestedList ? i.nestedList : null} 
                userId = {i.userId}
                content = {i.commMentContents}
                date = {i.commMentDate}
                userImg = {i.userImg}
                onReply = {""}
                onGroup = {onGroup}
              />
            )
          }): null}
        </div>
      </div>
    </BasicPopup>
  )
}

export default StyleCommentPopup;