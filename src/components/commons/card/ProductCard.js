import styles from './ProductCard.module.css';
import { intToWon, getImageApi } from '../../../utils/StringUtil';
import { useNavigate } from 'react-router-dom';

function ProductCard({productId, img, brand, name, price, badges, style}) {
  const nav = useNavigate();
  return (
    <div
     onClick={()=>window.location.href=`/product/${productId}`}
     style={{style}}
     className={styles.container}>
      <div className={styles.imgContainer}>
        <img
        src={getImageApi(img)}
        alt="product" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.brandContainer}>
          <p className={styles.brandText}>{brand}</p>
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.nameText}>{name}</p>
        </div>
        <div className={styles.badgeContainer}>
          {badges !== undefined ? badges : null}
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.priceText}>{intToWon(price)}</p>
          <p className={styles.priceSubText}>즉시 구매가</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;