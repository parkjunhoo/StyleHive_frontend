import styles from "./StylePost.module.css";
import BasicButton from "../../components/commons/buttons/BasicButton";
import Carousel from "../../components/commons/carousel/Carousel";
import ProductCard from "../../components/commons/card/ProductCard";
import BasicSpiner from "../../components/commons/spinner/BasicSpiner";
import IconButton from "../../components/commons/buttons/IconButton";
import StyleCommentCard from "../../components/commons/card/StyleCommentCard";
import StyleCommentPopup from "../../components/commons/popup/StyleCommentPopup";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {simpleDateFormat2} from '../../utils/StringUtil';
import { scrollToTop } from "../../utils/Util";
import axios from "axios";
import Swal from "sweetalert2";

import likeIcon from '../../assets/images/favorite.svg';
import fillLikeIcon from '../../assets/images/fill-favorite.svg';
import commentIcon from '../../assets/images/comment.svg';
import shareIcon from '../../assets/images/share.svg';

function StylePost() {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [commentHasNextPage, setCommentHasNextPage] = useState([false]);
  const [commentPage, setCommentPage] = useState(1);
  const [commentPopupState, setCommentPopupState] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [groupMessage, setGroupMessage] = useState(null);
  const getCommentSize = 20;

  const getPostData = async () => {
    const res = await axios.get(`http://localhost:8080/api/community/${id}`);
    setPostData(res.data);
  }

  const getCommentData = async (page) => {
    const res = await axios.get(`http://localhost:8080/api/community/comment/${id}/${getCommentSize}/${page}`);
    setCommentData(p=>[...p, ...res.data.mentList]);
    setCommentHasNextPage(res.data.hasNextPage);
  }

  const onGroup = (commentId, userId) => {
    setGroupId(commentId);
    setGroupMessage(userId);
  }
  const onGroupCancle = () => {
    setGroupId(null);
    setGroupMessage(null);
  }

  const regComment = async (content, groupId) => {
    const comment = {
      commNo: id,
      userId: "test",
      commMentContents: content,
      commMentDate: new Date(),
      commMentState: true,
      commMentGroupNo: groupId,
    };
    const res = await axios.post("http://localhost:8080/api/community/comment/write",comment,
    {"Content-Type": "application/json"});

    if(res.data.message === "success") {
      const res = await axios.get(`http://localhost:8080/api/community/comment/${id}/${getCommentSize*commentPage}/1`);
      Swal.fire({
        title: "등록 성공",
        text: "댓글이 등록되었습니다.",
        icon: "success"
      });
      onGroupCancle();
      setCommentData(res.data.mentList);
    } else {
      Swal.fire({
        title: "등록 실패",
        text: "댓글 등록에 실패했습니다.",
        icon: "error"
      });
    }
  }
  const nav = useNavigate();

  const onClickUser = (userId) => {
    nav(`/style/user/${userId}`);
  }

  useEffect(()=>{
    getPostData();
    scrollToTop();
  },[]);

  useEffect(()=>{
    scrollToTop();
  },[id])

  useEffect(()=>{
    getCommentData(commentPage);
  },[commentPage])

  useEffect(()=>{
    console.log(groupId);
  },[groupId])

  return (
    <div className={styles.container}>
      {postData !== null ?  
      <div>
        {commentPopupState ? <StyleCommentPopup
        onClose = {()=>{setCommentPopupState(false)}}
        onReg = {regComment}
        groupId = {groupId}
        onGroup = {onGroup}
        groupMessage = {groupMessage}
        onGroupCancle = {onGroupCancle}
        data={commentData}
        authorId={postData.userId}
        authorImg={postData.userImg}
        authorDate={postData.commDate}
        /> : null}
        <div className={styles.profileDiv}>
          <img 
          onClick={()=>onClickUser(postData.userId)}
          className={styles.profileImg} src={postData.userImg} alt="userProfile" />
          <div className={styles.profileNameDiv}>
            <p className={styles.nameText}>{postData.userId}</p>
            <p className={styles.timeText}>{simpleDateFormat2(postData.commDate)}</p>
          </div>
          <div className={styles.postBtnDiv}>
            <BasicButton className={styles.followBtn}><p className={styles.followBtnText}>팔로우</p></BasicButton>
            <BasicButton className={styles.moreBtn}><span className={styles.moreBtnText}>···</span></BasicButton>
          </div>
        </div>
        <Carousel
        style={{height:"90vh"}}
        >
          {postData.imgList.map((i,idx)=>{
            return (
              <img key={idx} alt="post" src={i.imgThumbUrl} />
            )
          })}
        </Carousel>
        <p className={styles.taggedText}>상품 태그 <strong>{postData.tagProductList.length}</strong>개</p>
        <ul className={styles.tagProductList}> 
          {postData.tagProductList.map(({productId,imgUrl,productEngName, productBrandEngName, nowBuyPrice },idx)=>{
            return (
              <li>
                <ProductCard
                  productId={productId}
                  key={idx}
                  img={imgUrl}
                  brand={productBrandEngName}
                  name={productEngName}
                  price={nowBuyPrice}
                />
              </li>
            )
          })}
        </ul>
        <div className={styles.btnDiv}>
          <IconButton iconSrc={likeIcon}/>
          <IconButton onClick={()=>{setCommentPopupState(true)}} iconSrc={commentIcon} style={{marginLeft:"15px"}}/>
          <IconButton iconSrc={shareIcon} style={{marginLeft:"auto"}}/>
        </div>
          <p className={styles.likeText}>좋아요 <strong>{postData.likeCount}</strong>개</p>
          <p className={styles.titleText}>{postData.commTitle}</p>
          <p className={styles.contentText}>{postData.commContents}</p>
          <div className={styles.tagDiv}>
            {postData.tagList.map((i,idx)=>{
              return (
                <p 
                key={idx} 
                className={styles.tagText}
                onClick={()=>{window.location.href=`/style/tag?tagId=${i.tagId}`}}
                >#{i.tagName}</p>
              )
            })}
          </div>
          <div className={styles.mentDiv}>
            <p className={styles.mentTitleText}>댓글 <strong>{postData.commentCount}</strong>개</p>
            {postData.commentList.map((i,idx)=>{
              return (
                <StyleCommentCard key={idx}
                  commentId = {i.commMentNo}
                  userId = {i.userId}
                  content = {i.commMentContents}
                  date = {i.commMentDate}
                  userImg = {i.userImg}
                  onGroup = {onGroup}
                  isSumm = {true}
                />
              )
            })}
            <div className={styles.moreCommentButton}>
              <p onClick={()=>{setCommentPopupState(true)}} className={styles.moreCommentText}>댓글 더 보기...</p>
              </div>
          </div>
      </div>
      : <BasicSpiner />}
    </div>
  )
}

export default StylePost;