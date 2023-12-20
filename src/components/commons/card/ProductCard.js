import styles from './ProductCard.module.css';

function ProductCard({img, brand, name, price, badges, style}) {
  return (
    <div
     style={{style}}
     className={styles.container}>
      <div className={styles.imgContainer}>
        <img
        src="https://static.nike.com/a/images/t_default/1bb96f3b-ea2b-422c-ab0d-49f06c3c54ef/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-gtx-%EC%8B%A0%EB%B0%9C-qkWhAYWe.png"
        alt="" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.brandContainer}>
          <p className={styles.brandText}>Jordan</p>
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.nameText}>Jordan 1 Retro High OG Black and Lucky Green</p>
        </div>
        <div className={styles.badgeContainer}>
          {badges !== undefined ? badges : null}
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.priceText}>150,000원</p>
          <p className={styles.priceSubText}>즉시 구매가</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;