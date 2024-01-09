import styles from './StylePage.module.css';
import LineTab from '../../components/commons/tabs/LineTab';
import IconTab  from '../../components/commons/tabs/IconTab';
import StyleList from '../../components/style/StyleList';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { scrollToTop } from '../../utils/Util';
import axios from 'axios';

function StylePage() {
  const nav = useNavigate();
  const { cate } = useParams();
  const [tabIdx, setTabIdx] = useState(1);
  const [page, setPage] = useState(1);
  const [commData, setCommData] = useState([]);

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
      action: ()=>nav("/style/follow"),
    },
    // {
    //   title: "발견",
    //   link: "find",
    //   action: ()=>nav("/style/find"),
    // },
    {
      title: "랭킹",
      link: "rank",
      action: ()=>nav("/style/rank"),
    },
    {
      title: "스니커즈",
      link: "sneakers",
      action: ()=>nav("/style/sneakers"),
    },
    {
      title: "의류",
      link: "cloth",
      action: ()=>nav("/style/cloth"),
    },
    {
      title: "가방",
      link: "bag",
      action: ()=>nav("/style/bag"),
    },
    {
      title: "액세서리",
      link: "accessory",
      action: ()=>nav("/style/accessory"),
    },
  ];

  const getCommData = async (cate, page) => {
    const res = await axios.get(`http://localhost:8080/api/community/pcate/${cate}/8/${page}`);
    setCommData(p=>[...p,...res.data.commList]);
  }

  useEffect(()=>{
    const idx = tabs2.indexOf(tabs2.find(({link})=> cate === link));
    setTabIdx(idx);
    scrollToTop();
  },[])

  useEffect(()=>{
    scrollToTop();
    switch(cate) {
      case 'sneakers':
        getCommData(1,page);
        break;

      default:
        break;
    }

  },[cate]);

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
        }}
        tabs={tabs2}/>
      <IconTab
        style={{
          borderBottom: "1px solid #f0f0f0",
        }}
       tabs={tabs}/>
       <StyleList data={commData}/>
    </div>
  );
}

export default StylePage;