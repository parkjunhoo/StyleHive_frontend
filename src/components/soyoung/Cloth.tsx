import styles from "./Cloth.module.css";
import "./Cloth.css";
import { intToWon, getImageApi } from "../../utils/StringUtil";
import { ReactElement } from "react";

type Props = {
  product?: any,
  children?: ReactElement,
  onClick?: any,
};

function Cloth(props:Props) {
  return (
    <div 
    onClick={props.onClick ? props.onClick : null}
    className={styles.product}>
      <div className={styles.product__image}><img alt="product" src={getImageApi(props.product.imgUrl)}></img></div>
      <div className={styles.product__info}>
        <p className={styles.product__maker}>{props.product.productBrandEngName}</p>
        <p className={styles.product__detail}>{props.product.productEngName}</p>
        <p className={styles.product__price}>
          {intToWon(props.product.nowBuyPrice)}원
        <p className={styles.product__special}>즉시 구매가</p>
        </p>
      </div>
    </div>
  );
}

export default Cloth;
