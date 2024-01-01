import styles from './QuoteInfo.module.css';
import BasicTab from '../commons/tabs/BasicTab';
import ProductChart from '../commons/chart/ProductChart';
import PriceLogTable from './PriceLogTable';
import BasicButton from '../commons/buttons/BasicButton';
import {useEffect, useState} from 'react';
import { intToWon, simpleDateFormat } from '../../utils/StringUtil';

function QuoteInfo({info, sizeList}) {
  const[dateTabIndex, setDateTabIndex] = useState(4);
  const setDateIndex = (i) =>{
    setDateTabIndex(i);
  }
  const[optionTabIndex, setOptionTabIndex] = useState(0);
  const setOptionIndex = (i) =>{
    setOptionTabIndex(i);
  }

  const[dealInfo, setDealInfo] = useState([]);
  const[logInfo, setLogInfo] = useState([]);
  const[contentTitleArr, setContentTitleArr] = useState([]);

  useEffect(()=>{
    if(dateTabIndex !== 4) {
      const months = [1, 3, 6, 12];
      const dateRange = new Date();
      dateRange.setMonth(dateRange.getMonth() - months[dateTabIndex]);
      const newInfo = info[0].filter(d=>new Date(d.dealDate) >= dateRange);
      setDealInfo(newInfo);
    } else {
      setDealInfo(info[0]);
    }

    if(optionTabIndex == 0) {
      setContentTitleArr(["거래가","거래일"]);
      setLogInfo(info[0].map(i=>{
        return {
          productSizeId: i.productSizeId,
          firstContent: intToWon(i.dealPrice),
          secondContent: simpleDateFormat(i.dealDate)
        }
      }));
    } else {
      setContentTitleArr([optionTabIndex === 1 ? "판매 입찰" : "구매 입찰", "수량"]);
      const newData = Object.values(info[optionTabIndex].reduce((a, {tenderPrice, productSizeId}) => {
        if(!a[tenderPrice]) {
          a[tenderPrice] = {firstContent: tenderPrice , secondContent: 1, productSizeId:productSizeId};
        } else {
          a[tenderPrice].secondContent++;
        }
        return a;
      },{}));
      setLogInfo(newData);
    }
  },[dateTabIndex, optionTabIndex, info]);

  const tabs = [
    "1개월",
    "3개월",
    "6개월",
    "1년",
    "전체",
  ];

  const tabs2 = [
    "체결 거래",
    "판매 입찰",
    "구매 입찰",
  ];



  return (
    <div className={styles.container}>
      <p className={styles.titleText}>시세</p>
      <BasicTab actionOnIdex={setDateIndex} tabs={tabs} initIndex={4}/>
      <ProductChart info={dealInfo} height={200}/>
      <BasicTab actionOnIdex={setOptionIndex} tabs={tabs2}/>
      <PriceLogTable contentTitleArr={contentTitleArr} info={logInfo} sizeList={sizeList} />
      <BasicButton style={{height: "40px",}}>
        <p style={{
          color: "#22222CC",
          fontSize: "14px",
          fontWeight: "400",
        }}>체결 내역 더보기
        </p>
      </BasicButton>
    </div>
  );
}

export default QuoteInfo;