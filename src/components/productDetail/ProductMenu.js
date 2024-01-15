import _ from 'lodash';
import SelectButton from '../commons/buttons/SelectButton';
import DetailBox from './DetailBox';
import TradeButton from './TradeButton';
import BasicButton from '../commons/buttons/BasicButton';
import AddInfo from './AddInfo';
import BrandButton from './BrandButton';
import QuoteInfo from './QuoteInfo';
import BlockSelectPopup from './BlockSelectPopup';
import { DisplayTable , IconTableItem } from './DisplayTable';
import styles from './ProductMenu.module.css';
import { intToWon, simpleDateFormat, getImageApi } from '../../utils/StringUtil';
import { useState, useEffect } from 'react';

import icon2 from '../../assets/images/info1.png';
import icon3 from '../../assets/images/info2.png';
import icon4 from '../../assets/images/info3.png';

function ProductMenu({info}) {
  const [pickSize, setPickSize] = useState(0);
  const [dealList, setDealList] = useState([]);
  const [sizePopupOption, setSizePopupOption] = useState([]);
  const [sizePopupFlag, setSizePopupFlag] = useState(false);
  const [wishPopupOption, setWishPopupOption] = useState([]);
  const [wishPopupFlag, setWishPopupFlag] = useState(false);
  const [wishSelectList, setWishSelectList] = useState([]);
  const [sizeButtonText, setSizeButtonText] = useState("모든 사이즈");
  const [nowBuyPrice, setNowBuyPrice] = useState("0원");
  const [nowSellPrice, setNowSellPrice] = useState("0원");
  const [wishCount, setWishCount] = useState(info.wishCount);
  const [tenderBuyList, setTenderBuyList] = useState([]);
  const [tenderSellList, setTenderSellList] = useState([]);

  let detail = [
    {
    title: "최근 거래가",
    value: intToWon(0),
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
  const [details, setDetails] = useState(detail);
  const pickedBlockStyle = {border:"1px solid black", fontWeight:"700"};

  useEffect(() => {
    const onWishPopupButtonClick = (productSizeId) => {
      setWishSelectList(p => {
        if (p.includes(productSizeId)) {
          return p.filter(i => i !== productSizeId);
        } else {
          return [...p, productSizeId];
        }
      });
    };
  
    const wishPopupOptions = info.productSizeList.map(({ productSizeId, productSizeValue }) => ({
      value: productSizeValue,
      action: () => onWishPopupButtonClick(productSizeId),
      productSizeId: productSizeId,
    }));
  
    setWishPopupOption(wishPopupOptions);
  }, []);

  useEffect(()=>{
    if (wishPopupOption.length > 0) {
      const wishOptions = [...wishPopupOption];
      wishOptions.forEach((i)=>{
        if (wishSelectList.find(s=> s === i.productSizeId)) {
          i.blockStyle = pickedBlockStyle;
        } else {
          i.blockStyle = null;
        }
      });
      setWishPopupOption(wishOptions);
    }
  },[wishSelectList])

  useEffect(()=>{
    let buyTenderList = _.cloneDeep(info.productTenderList);
    buyTenderList = buyTenderList.filter(t => t.tenderFlag === true);
    buyTenderList.sort((a, b) => new Date(a.tenderDate) - new Date(b.tenderDate));
    let sellTenderList = _.cloneDeep(info.productTenderList);
    sellTenderList = sellTenderList.filter(t => t.tenderFlag === false);
    sellTenderList.sort((a, b) => new Date(a.tenderDate) - new Date(b.tenderDate));

    const sellTenderSizeList = [];
    sellTenderList.forEach(i=>{
      if(!sellTenderSizeList[i.productSizeId]) {
        sellTenderSizeList[i.productSizeId] = i;
      }
    })
    const sizePopupOptions = [{
      action:()=>{setPickSize(0); setSizePopupFlag(false); setSizeButtonText("모든 사이즈")},
      title: "모든 사이즈",
      value: "구매입찰",
    }];
    if ( pickSize === 0 ) {
      sizePopupOptions[0].blockStyle = pickedBlockStyle;
    }
    info.productSizeList.forEach((i, idx)=>{
      const tender = sellTenderSizeList[i.productSizeId];
      const option = {title: i.productSizeValue};
      if (tender) {
        option.value = intToWon(tender.tenderPrice)
        option.valueStyle = {color:"#f15746"};
      } else {
        option.value = "구매입찰";
      }
      option.action = ()=>{setPickSize(idx+1); setSizePopupFlag(false); setSizeButtonText(option.title)};
      if( idx+1 === pickSize) option.blockStyle = pickedBlockStyle;
      sizePopupOptions.push(option);
    })
    setSizePopupOption(sizePopupOptions);

    let deals = _.cloneDeep(info.productDealList);
    if(pickSize !== 0){
      deals = deals.filter(item => item.productSizeId === info.productSizeList[pickSize-1].productSizeId);
      buyTenderList = buyTenderList.filter(t => t.productSizeId === info.productSizeList[pickSize-1].productSizeId);
      sellTenderList = sellTenderList.filter(t => t.productSizeId === info.productSizeList[pickSize-1].productSizeId);
    }
    deals.sort((a, b) => new Date(a.dealDate) - new Date(b.dealDate));
    setDealList(deals);
    const buyTenderSortByPrice = buyTenderList.sort((a,b)=> a.tenderPrice - b.tenderPrice);
    setTenderBuyList(buyTenderSortByPrice);
    const sellTenderSortByPrice = sellTenderList.sort((a,b)=> a.tenderPrice - b.tenderPrice);
    setTenderSellList(sellTenderSortByPrice);

    if(sellTenderList.length > 0) {
      setNowBuyPrice(intToWon(sellTenderSortByPrice[0].tenderPrice));
    } else {
      setNowBuyPrice("-원");
    }
    if(buyTenderList.length > 0) {
      setNowSellPrice(intToWon(buyTenderSortByPrice[buyTenderSortByPrice.length-1].tenderPrice));
    } else {
      setNowSellPrice("-원");
    }
  },[pickSize]);

  useEffect(()=>{
    const updatedDetails = [...details];
    updatedDetails[0].value = dealList.length === 0 ? intToWon(0) : intToWon(dealList[0].dealPrice);
    setDetails(updatedDetails);
  },[dealList]);



  return (
    <div>
      {sizePopupFlag ? <BlockSelectPopup title={"사이즈"} options={sizePopupOption} closeAction={()=>{setSizePopupFlag(false)}}/> : null}
      {wishPopupFlag ? <BlockSelectPopup title={"관심 상품 저장"} options={wishPopupOption} closeAction={()=>{setWishPopupFlag(false)}}/> : null}
      <div className={styles.priceContainer}>
        <p className={styles.priceSubText}>즉시 구매가</p>
        <p className={styles.priceText}>{nowBuyPrice}</p>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>{info.productEngName}</p>
        <p className={styles.titleSubText}>{info.productKorName}</p>
      </div>
      <SelectButton onClick={()=>{setSizePopupFlag(true)}} text={sizeButtonText}/>
      <DetailBox details={details}/>
      <div style={{display: "flex", width:"100%"}}>
        <TradeButton 
        tag={"구매"} 
        price={nowBuyPrice} 
        color={"rgb(239, 98, 83)"}
        desc={"즉시 구매가"}/>
        <TradeButton 
        tag={"판매"} 
        price={nowSellPrice} 
        color={"rgb(65, 185, 121)"}
        desc={"즉시 판매가"}/>
      </div>
      <BasicButton 
        onClick={()=>{setWishPopupFlag(true)}}
        style={{height: "60px",}}>
        <p style={{
          color: "#333",
          fontSize: "15px",
          fontWeight: "400",
        }}>※ 관심상품
         <span style={{
          fontWeight: "600",
          marginLeft: "5px",
         }}>{wishCount}</span>
        </p>
      </BasicButton>
      <AddInfo />
      <BrandButton
      iconSrc={getImageApi(info.productBrand.productBrandImg)}
      name={info.productBrand.productBrandEngName} subName={info.productBrand.productBrandKorName}/>
      <div style={{backgroundColor:"#7777a59e", width:"100%", height:"80px", margin:"15px 0"}}>
        Banner
      </div>
      <QuoteInfo 
       info={[dealList, tenderBuyList, tenderSellList]} 
       sizeList={_.cloneDeep(info.productSizeList)}
      />
      <DisplayTable>
        <IconTableItem
          iconSrc={icon2}
          iconSize={26}
          title="100% 정품 보증"
          desc="StyleHive에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다."
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
          desc="검수에 합격한 경우에 한하여 StyleHive의 정품 인증 패키지가 포함된 상품이 배송됩니다."
        />
      </DisplayTable>
    </div>
  );
}

export default ProductMenu;