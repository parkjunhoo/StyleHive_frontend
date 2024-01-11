import styles from './StylePage.module.css';
import LineTab from '../../components/commons/tabs/LineTab';
import IconTab  from '../../components/commons/tabs/IconTab';
import StyleList from '../../components/style/StyleList';
import StyleUserCard from '../../components/commons/card/StyleUserCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { scrollToTop } from '../../utils/Util';
import axios from 'axios';
import BasicSpiner from '../../components/commons/spinner/BasicSpiner';
import StyleUser from './StyleUser';

function StylePage() {
  const getSize = 5;
  const nav = useNavigate();
  const { cate } = useParams();
  const prevCateRef = useRef(cate);
  const [tabIdx, setTabIdx] = useState(1);
  const [page, setPage] = useState(1);
  const [commData, setCommData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(loading);
  const [hasNext, setHasNext] = useState(true);
  const hasNextRef = useRef(hasNext);

  const target = useRef(null);

  const obOption = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }
  const obCallback = () => {
    if(loadingRef.current || !hasNextRef.current) return;
    setPage(p=>p+1);
  }
  const ob = new IntersectionObserver(obCallback, obOption);

  const tabs = [
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "패션템 챌린지",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "코트 VS 패딩",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "12월 코디",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "윈터스트릿",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "패딩룩",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "내일 뭐신지",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "데일리 슈즈",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "노스페이스",
    },
    {
      iconSrc: "https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png",
      title: "겨울코디",
    },
  ];

  const tabs2 = [
    // {
    //   title: "아우터매치",
    //   link: "outermatch",
    //   action: ()=> nav("/style/outermatch"),
    //   color: "rgb(239, 98, 83)",
    // },
    {
      title: "팔로잉",
      link: "follow",
      action: ()=>window.location.href="/style/follow",
    },
    // {
    //   title: "발견",
    //   link: "find",
    //   action: ()=>nav("/style/find"),
    // },
    {
      title: "랭킹",
      link: "rank",
      action: ()=>window.location.href="/style/rank",
    },
    {
      title: "스니커즈",
      link: "sneakers",
      action: ()=>window.location.href="/style/sneakers",
    },
    {
      title: "의류",
      link: "cloth",
      action: ()=>window.location.href="/style/cloth",
    },
    {
      title: "가방",
      link: "bag",
      action: ()=>window.location.href="/style/bag",
    },
    {
      title: "액세서리",
      link: "accessory",
      action: ()=>window.location.href="/style/accessory",
    },
  ];

  const getCommData = async (cate, page) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8080/api/community/pcate/${cate}/${getSize}/${page}`);
    const comm = res.data.commList;
    if(comm) setCommData(p=>[...p,...comm]);
    setHasNext(res.data.hasNextPage);
    setLoading(false);
  }
  const getCommData2 = async (cate, page) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8080/api/community/pbcate/${getSize}/${page}?cateId=${cate}`);
    const comm = res.data.commList;
    if(comm) setCommData(p=>[...p,...comm]);
    setHasNext(res.data.hasNextPage);
    setLoading(false);
  }

  const getRankData = async (page) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8080/api/community/rank/10/${page}`);
    const rankData = res.data.rankData;
    if(rankData) setCommData(p=>[...p,...rankData]);
    setHasNext(res.data.hasNextPage);
    setLoading(false);
  }

  const getDataByCate = (page) => {
    switch(cate) {
      case 'sneakers':
        getCommData(1,page);
        break;
      
      case 'cloth':
        getCommData2('2,3,4',page);
        break;

      case 'bag':
        getCommData2('6',page);
        break;

      case 'accessory':
        getCommData2('5',page);
        break;
      
      case 'rank':
        getRankData(page);
        break;

      default:
        break;
    }
  }

  useEffect(()=>{
    const idx = tabs2.indexOf(tabs2.find(({link})=> cate === link));
    setTabIdx(idx);
    scrollToTop();

    return () => {
      ob.disconnect();
    }
  },[])

  useEffect(()=>{
    loadingRef.current = loading;
  },[loading])

  useEffect(()=>{
    hasNextRef.current = hasNext;
  },[hasNext])

  useEffect(()=>{
    if(prevCateRef.current !== cate) {
      setCommData([]);
      setLoading(true);
      setHasNext(true);
      setPage(1);
      getDataByCate(1);
      scrollToTop();
    }
    prevCateRef.current = cate;
  },[cate])

  useEffect(()=>{
    getDataByCate(page);
  },[page])

  useEffect(()=>{
    ob.observe(target.current);
  },[target])

  return(
    <div className={styles.contentContainer}>
      <div className={styles.titleConainer}>
        STYLE
      </div>
      <LineTab 
        firstIndex={tabIdx}
        style={{
          borderBottom: "1px solid #f0f0f0",
          position: "fixed",
          top:"100px",
          backgroundColor: "white",
          zIndex: "100",
        }}
        tabs={tabs2}/>
      {cate !== 'rank' ? 
      <div>
        <IconTab
          style={{
            borderBottom: "1px solid #f0f0f0",
          }}
        tabs={tabs}/>
        {commData ? <StyleList data={commData}/> : null}
       </div>
       :
        <div className={styles.rankDiv}>
          {commData.map((i,idx)=>{
            return (
              <StyleUserCard
                key={idx}
                rank={idx+1}
                data={i}
              />
            )
          })}
        </div>
       }
       {loading ? <BasicSpiner/> : null}
      <div ref={target} style={{height:"5vh"}}></div>
    </div>
  );
}

export default StylePage;