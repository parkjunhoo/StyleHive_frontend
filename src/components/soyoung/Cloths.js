import Cloth from "./Cloth";
import styles from "./Cloths.module.css";

function Cloths({productData}) {
  return (
    <div className={styles.cloths}>
      {productData.map((i,idx) => {
        return (
          <Cloth product={i} onClick={()=>{
            window.location.href = `/product/${i.productId}`;
          }}/>
        )
      })}
    </div>
  );
}

export default Cloths;
