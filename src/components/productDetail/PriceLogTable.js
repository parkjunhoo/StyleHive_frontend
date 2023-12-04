import styles from './PriceLogTable.module.css';

function PriceLogTable() {
  const exData = [
    {size: 280, price:"3000", date:"23/12/05"},
    {size: 270, price:"2800", date:"23/12/04"},
    {size: 230, price:"1500", date:"23/12/04"},
    {size: 250, price:"2000", date:"23/12/03"},
    {size: 275, price:"3200", date:"23/12/01"},
  ]

  return(
    <div className={styles.container}>
      <table className={styles.table}>
        <colgroup>
          <col style={{width: "50%"}}></col>
          <col style={{width: "25%", }}></col>
          <col style={{width: "25%"}}></col>
        </colgroup>
        <thead>
          <tr>
            <th>옵션</th>
            <th style={{textAlign:"right"}}>거래가</th>
            <th style={{textAlign:"right"}}>거래일</th>
          </tr>
        </thead>
        <tbody>
          {exData.map(({size,price,date},idx)=>{
            return(
              <tr key={idx}>
                <td>{size}</td>
                <td style={{textAlign:"right"}}>{price}원</td>
                <td style={{textAlign:"right"}}>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PriceLogTable;