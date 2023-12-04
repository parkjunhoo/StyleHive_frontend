import styles from './AddInfo.module.css';
import { DisplayTable , TextTableItem , IconTableItem } from './DisplayTable';

import icon1 from '../../assets/images/fastdel.png';
import icon2 from '../../assets/images/del.png';
import icon3 from '../../assets/images/garage.png';

function AddInfo() {

  const displayContent = [
    {
      summ: "포인트",
      desc: "계좌 간편결제 시 1% 적립"
    },
    {
      summ: "결제",
      desc: "네이버페이 최대 2.1% 네이버페이포인트 적립"
    }
  ]

  return (
    <div>
      <DisplayTable 
      title={"추가 혜택"}
      more={()=>console.log("더보기")}>
        <TextTableItem>
          <span>포인트</span>
          <span>계좌 간편결제 시 <span style={{fontWeight: "900"}}>1%</span> 적립</span>
          <span>결제</span>
          <span>네이버페이 최대 2.1% 네이버페이포인트 적립</span>
        </TextTableItem>
      </DisplayTable>
      <hr style={{background: "#ebebeb", height: "1px", border:"0", margin: "25px 0"}}></hr>
      <DisplayTable title={"배송 정보"}>
        <IconTableItem 
         iconSrc={icon1}
         title={"빠른배송"}
         subTitle={"5,000원"}
         desc={"지금 결제시 내일 12/5(화) 도착 예정"}
         more={()=>console.log("more누름")}>
        </IconTableItem>
        <IconTableItem 
         iconSrc={icon2}
         title={"빠른배송"}
         subTitle={"5,000원"}
         desc={"지금 결제시 내일 12/5(화) 도착 예정"}>
        </IconTableItem>
        <IconTableItem 
         iconSrc={icon3}
         title={"빠른배송"}
         subTitle={"5,000원"}
         desc={"지금 결제시 내일 12/5(화) 도착 예정"}>
        </IconTableItem>
      </DisplayTable>
      <hr style={{background: "#ebebeb", height: "1px", border:"0", margin: "25px 0"}}></hr>
      
    </div>
  );
}

export default AddInfo;