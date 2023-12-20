import styles from './StylePage.module.css';
import LineTab from '../../components/commons/tabs/LineTab';
import IconTab  from '../../components/commons/tabs/IconTab';
import StyleList from '../../components/style/StyleList';
import { useNavigate } from 'react-router-dom';

function StylePage() {
  const nav = useNavigate();

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
    {
      title: "아우터매치",
      action: ()=> nav("/style/outermatch"),
      color: "rgb(239, 98, 83)"
    },
    {
      title: "팔로잉",
      action: ()=>nav("/style/follow")
    },
    {
      title: "발견",
      action: ()=>nav("/style/find")
    },
    {
      title: "랭킹",
      action: ()=>nav("/style/rank")
    },
    {
      title: "윈터스트릿",
      action: ()=>nav("/style/winterstreet")
    },
    {
      title: "트렌드",
      action: ()=>nav("/style/trend")
    },
    {
      title: "셀럽스타일",
      action: ()=>nav("/style/celebrity")
    },
    {
      title: "스니커즈",
      action: ()=>nav("/style/sneakers")
    },
    {
      title: "럭셔리",
      action: ()=>nav("/style/luxury")
    },
    {
      title: "의류",
      action: ()=>nav("/style/cloth")
    },
    {
      title: "가방",
      action: ()=>nav("/style/bag")
    },
    {
      title: "컬렉터블",
      action: ()=>nav("/style/collectable")
    },
    {
      title: "액세서리",
      action: ()=>nav("/style/accessory")
    },
  ];

  return(
    <div className={styles.contentContainer}>
      <div className={styles.titleConainer}>
        STYLE
      </div>
      <LineTab 
        style={{
          borderBottom: "1px solid #f0f0f0",
        }}
        tabs={tabs2}/>
      <IconTab
        style={{
          borderBottom: "1px solid #f0f0f0",
        }}
       tabs={tabs}/>
       <StyleList isObserver={true} />
    </div>
  );
}

export default StylePage;