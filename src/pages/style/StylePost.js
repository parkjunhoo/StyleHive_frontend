import styles from "./StylePost.module.css";
import BasicButton from "../../components/commons/buttons/BasicButton";
import Carousel from "../../components/commons/carousel/Carousel";
import ProductCard from "../../components/commons/card/ProductCard";
import BasicSpiner from "../../components/commons/spinner/BasicSpiner";
import IconButton from "../../components/commons/buttons/IconButton";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {simpleDateFormat2} from '../../utils/StringUtil';
import { scrollToTop } from "../../utils/Util";
import axios from "axios";

import likeIcon from '../../assets/images/favorite.svg';
import fillLikeIcon from '../../assets/images/fill-favorite.svg';
import commentIcon from '../../assets/images/comment.svg';
import shareIcon from '../../assets/images/share.svg';

function StylePost() {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);

  const getPostData = async () => {
    const res = await axios.get(`http://localhost:8080/api/community/${id}`);
    setPostData(res.data);
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

  return (
    <div className={styles.container}>
      {postData !== null ?  
      <div>
        <div onClick={()=>onClickUser(postData.userId)} className={styles.profileDiv}>
          <img 
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
        <p className={styles.tagText}>상품 태그 <strong>{postData.tagProductList.length}</strong>개</p>
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
          <IconButton iconSrc={commentIcon} style={{marginLeft:"15px"}}/>
          <IconButton iconSrc={shareIcon} style={{marginLeft:"auto"}}/>
        </div>
          <p className={styles.likeText}>좋아요 <strong>{postData.likeCount}</strong>개</p>
          <p className={styles.titleText}>{postData.commTitle}</p>
          <p className={styles.contentText}>{postData.commContents}</p>
          <div className={styles.tagDiv}>
            {postData.tagList.map((i,idx)=>{
              return (
                <p key={idx} className={styles.tagText}>#{i.tagName}</p>
              )
            })}
          </div>
      </div>
      : <BasicSpiner />}
    </div>
  )
}

export default StylePost;