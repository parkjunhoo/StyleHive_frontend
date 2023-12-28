import SelectButton from '../commons/buttons/SelectButton';
import DetailBox from './DetailBox';
import TradeButton from './TradeButton';
import BasicButton from '../commons/buttons/BasicButton';
import AddInfo from './AddInfo';
import BrandButton from './BrandButton';
import QuoteInfo from './QuoteInfo';
import { DisplayTable , IconTableItem } from './DisplayTable';
import styles from './ProductMenu.module.css';
import { intToWon, simpleDateFormat } from '../../utils/StringUtil';

import icon from '../../assets/images/jordan.webp';
import icon2 from '../../assets/images/info1.png';
import icon3 from '../../assets/images/info2.png';
import icon4 from '../../assets/images/info3.png';

function ProductMenu({info}) {
  const details = [
    {
    title: "최근 거래가",
    value: "132,000원",
    },
    {
    title: "발매가",
    value: intToWon(info.productRelease),
    },
    {
      title: "모델번호",
      value: info.productModelNum,
    },
    {
      title: "출시일",
      value: simpleDateFormat(info.productDate),
    },
    {
      title: "대표 색상",
      value: info.productColor,
    },
    ];

  return (
    <div>
      <div className={styles.priceContainer}>
        <p className={styles.priceSubText}>즉시 구매가</p>
        <p className={styles.priceText}>120,000원</p>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>{info.productEngName}</p>
        <p className={styles.titleSubText}>{info.productKorName}</p>
      </div>
      <SelectButton text={"모든 사이즈"}/>
      <DetailBox details={details}/>
      <div style={{display: "flex", width:"100%"}}>
        <TradeButton 
        tag={"구매"} 
        price={"140,000원"} 
        color={"rgb(239, 98, 83)"}
        desc={"즉시 구매가"}/>
        <TradeButton 
        tag={"판매"} 
        price={"140,000원"} 
        color={"rgb(65, 185, 121)"}
        desc={"즉시 판매가"}/>
      </div>
      <BasicButton style={{height: "60px",}}>
        <p style={{
          color: "#333",
          fontSize: "15px",
          fontWeight: "400",
        }}>※ 관심상품
         <span style={{
          fontWeight: "600",
          marginLeft: "5px",
         }}>422</span>
        </p>
      </BasicButton>
      <AddInfo />
      <BrandButton
      iconSrc={icon}
      name={"Jordan"} subName={"조던"}/>
      <div style={{backgroundColor:"#7777a59e", width:"100%", height:"80px", margin:"15px 0"}}>
        Banner
      </div>
      <QuoteInfo />
      <DisplayTable>
        <IconTableItem
          iconSrc={icon2}
          iconSize={26}
          title="100% 정품 보증"
          desc="KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다."
        />
        <IconTableItem
          iconSrc={icon3}
          iconSize={26}
          title="엄격한 다중 검수"
          desc="모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다."
        />
        <IconTableItem
          iconSrc={icon4}
          iconSize={26}
          title="정품 인증 패키지"
          desc="검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다."
        />
      </DisplayTable>
    </div>
  );
}

export default ProductMenu;