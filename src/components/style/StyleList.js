import styles from './StyleList.module.css';
import StyleCard from '../commons/card/StyleCard';
import BasicSpinner from '../commons/spinner/BasicSpiner';
import { useState , useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function StyleSection({data}) {
  const nav = useNavigate();
  
  return (
    <div>
      <div 
       className={styles.container}>
        {data.map(({commNo, imgList, userImg, userId, likeCount, commTitle, commContents},idx)=>{
          return(
            <StyleCard
              key={idx}
              imgSrc={imgList[0].imgThumbUrl}
              userImgSrc={userImg}
              userId={userId}
              likeCount={likeCount}
              title={commTitle}
              content={commContents}
              onClick={()=>nav(`/style/post/${commNo}`)}
              multiple={imgList.length > 1 ? true : false}
            />
          );
        })}
      </div>
    </div>
  )
}

export default StyleSection;