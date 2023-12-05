import styles from './QuoteInfo.module.css';
import BasicTab from '../commons/tabs/BasicTab';
import ProductChart from '../commons/chart/ProductChart';
import PriceLogTable from './PriceLogTable';
import BasicButton from '../commons/buttons/BasicButton';

function QuoteInfo() {

  const log = [
    { name: "Price", data: [1000, 2000, 3000]},
    { name: "Price2", data: [1500, 2500, 3500]},
  ];

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
      <BasicTab tabs={tabs}/>
      <ProductChart height={200}/>
      <BasicTab tabs={tabs2}/>
      <PriceLogTable />
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