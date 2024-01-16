import { getImageApi, intToWon } from '../../../utils/StringUtil';
import styles from './ProductCardSmall.module.css';

function ProductCardSmall({productData, style, onClick}) {
  return (
    <div 
    onClick={()=>{onClick(productData)}}
    style={style}
    className={styles.container}>
      <div className={styles.productImgDiv}>
        <img alt="product" src={getImageApi(productData.imgUrl)} />
      </div>
      <div className={styles.infoDiv}>
        <p className={styles.productNameText}>{productData.productEngName}</p>
        <p className={styles.productKorNameText}>{productData.productKorName}</p>
        <p className={styles.priceText}>{intToWon(productData.nowBuyPrice)}</p>
      </div>
    </div>
  )
}

export default ProductCardSmall;