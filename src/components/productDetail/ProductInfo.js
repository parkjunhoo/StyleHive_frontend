import Carousel from '../commons/carousel/Carousel';
import ProductMenu from './ProductMenu';
import styles from './ProductInfo.module.css';

function ProductInfo({info}) {
  return(
    <div className={styles.columnWarpper}>
      <div className={styles.leftContent}>
        <Carousel style={{
          position: "sticky",
          top:"30px",
          border: "1px solid #ebebeb"}} className={styles.productCarousel}>
          {info.thumbnail.map((url, i) =>(
            <div key={i} style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.rightContent}>
        <ProductMenu />
      </div>
    </div>
  );
}

export default ProductInfo;