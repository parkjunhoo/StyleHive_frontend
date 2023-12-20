import styles from './StyleList.module.css';
import StyleCard from '../commons/card/StyleCard';
import BasicSpinner from '../commons/spinner/BasicSpiner';
import { useState , useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function StyleSection({isObserver}) {
  const nav = useNavigate();
  const baseUrl = "https://cataas.com/cat/";
  const obTarget = useRef(null);
  const [testData,setTestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const getCats = async ()=>{
    setLoading(true);
    const images = [];
    for(let i=0; i<16; i++) {
      await fetch('https://cataas.com/cat?json=true')
      .then((response) => response.json())
      .then((data) => images.push(baseUrl+data._id))
    }
    await makeData(images);
    setLoading(false);
  }

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
    setTestData( (c) => [...c, ...tData] );
  }

  useEffect(()=>{
    const obCallBack = (entries) => {
      if (!loading && entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    }
    
    const ob = new IntersectionObserver(obCallBack, {root:null, rootMargin:'0px', threshold:'1.0'});

    if(isObserver === true) ob.observe(obTarget.current);
    

    return () =>{
      ob.disconnect();
    }
  },[loading]);

  useEffect(()=>{
    if(isObserver === true) getCats();
  },[page])

  return (
    <div>
      <div 
       className={styles.container}>
        {testData.map(({imgSrc, userImgSrc, userId, likeCount, content},idx)=>{
          return(
            <StyleCard
              key={idx}
              imgSrc={imgSrc}
              userImgSrc={userImgSrc}
              userId={userId}
              likeCount={likeCount}
              content={content}
              onClick={()=>nav(`/style/post/${idx}`)}
            />
          );
        })}
      </div>
      {loading ? <BasicSpinner /> : null}
      {isObserver === true ? <div style={{height:"500px", width:"100px", backgroundColor:"red"}}></div> : null}
      {isObserver === true ? <div ref={obTarget}>OBSERVER TEST</div> : null}
    </div>
  )
}

export default StyleSection;