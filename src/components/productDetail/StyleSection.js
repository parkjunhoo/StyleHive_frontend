import styles from './StyleSection.module.css';
import StyleCard from '../commons/card/StyleCard';
import BasicButton from '../commons/buttons/BasicButton';
import { useState , useEffect } from 'react';

function StyleSection() {

  const baseUrl = "https://cataas.com/cat/";
  const [testData,setTestData] = useState([]);

  const makeData = (images)=> {
    let tData = [];
    for(let i=0; i<8; i++) {
      tData.push({
        imgSrc: images[i],
        userImgSrc: images[i*2],
        userId: "userId"+i,
        likeCount: Math.floor(Math.random() * 1001),
        content:"content"+i,
      })
    }
    setTestData(tData);
  }

  
  useEffect(() => {
    const getCats = async ()=>{
      const images = [];
  
      for(let i=0; i<16; i++) {
        await fetch('https://cataas.com/cat?json=true')
        .then((response) => response.json())
        .then((data) => images.push(baseUrl+data._id))
      }
  
      await makeData(images);
    }

    getCats();
  }, []);

  return (
    <div>
      <div className={styles.container}>
          {testData.map(({imgSrc, userImgSrc, userId, likeCount, content},idx)=>{
            return(
              <StyleCard
                key={idx}
                imgSrc={imgSrc}
                userImgSrc={userImgSrc}
                userId={userId}
                likeCount={likeCount}
                content={content}
              />
            );
          })}
      </div>
      <BasicButton
      style={{
        width: "fit-content",
        padding: "10px 30px",
        fontSize: "14px",
        fontWeight: "400",
        margin: "15px auto",
      }}
      >더보기</BasicButton>
    </div>
  )
}

export default StyleSection;