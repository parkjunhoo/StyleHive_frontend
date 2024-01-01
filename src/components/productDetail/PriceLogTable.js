import styles from './PriceLogTable.module.css';

function PriceLogTable({info, sizeList, contentTitleArr}) {
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
            <th style={{textAlign:"right"}}>{contentTitleArr[0]}</th>
            <th style={{textAlign:"right"}}>{contentTitleArr[1]}</th>
          </tr>
        </thead>
        <tbody>
          {info.map((i,idx)=>{
            return(
              <tr key={idx}>
                <td>{sizeList.find(s=>s.productSizeId === i.productSizeId).productSizeValue}</td>
                <td style={{textAlign:"right"}}>{i.firstContent}</td>
                <td style={{textAlign:"right"}}>{i.secondContent}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PriceLogTable;