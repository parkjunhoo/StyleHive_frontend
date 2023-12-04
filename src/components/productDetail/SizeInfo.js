import styles from './SizeInfo.module.css';

function SizeInfo() {

  const sizeDataKR = 
  {
    country:"KR",
    size: [225,230,235,235,240,240,245,250,255,260,270,275,280,285,290,295,300]
  };

  const sizeData = [
    {
      country:"US (M)",
      size: [3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]
    },
    {
      country:"US (W)",
      size: [3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]
    },
    {
      country:"UK",
      size: [3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]
    },
    {
      country:"JP",
      size: [3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]
    },
    {
      country:"EU",
      size: [3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]
    },
  ]

  return (
    <div className={styles.container}>
      <p className={styles.titleText}>사이즈 정보</p>
      <div className={styles.tableContainer}>
        <table className={styles.sizeTable}>
          <thead>
            <tr>
              <th>
                KR
              </th>
              {sizeDataKR.size.map((size,idx)=>{
                return(
                  <th key={idx}>{size}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sizeData.map(({country, size},idx)=>{
              return(
                <tr key={idx}>
                  <td className={styles.likeTh}>{country}</td>
                  {size.map((i,idx)=>{
                    return(
                      <td key={idx}>{i}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.shadowBox}></div>
      <li style={{margin:"5px 0 5px 10px", fontSize: "15px", color:"#222", fontWeight:"300"}}>해당 사이즈 정보는 고객 이해를 위한 참고용이며, 정확한 내용은 브랜드 공식 홈페이지에서 확인해 주시기 바랍니다.</li>
      <hr style={{background: "#ebebeb", height: "1px", border:"0", margin: "25px 0"}}></hr>
    </div>
  );
}

export default SizeInfo;