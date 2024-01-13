import Carousel from '../commons/carousel/Carousel';
import ProductMenu from './ProductMenu';
import styles from './ProductInfo.module.css';
import {getImageApi} from '../../utils/StringUtil';

function ProductInfo({info}) {
  return(
    <div className={styles.columnWarpper}>
      <div className={styles.leftContent}>
        {info && info.productImgList ?
          <Carousel style={{
            position: "sticky",
            top:"30px",
            border: "1px solid #ebebeb"}} className={styles.productCarousel}>
            {info.productImgList.map((i, idx) =>(
              <div key={idx} style={{
                backgroundImage: `url(${getImageApi(i.imgThumbUrl)})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}>
              </div>
            ))}
          </Carousel>
        : null}
        
      </div>
      <div className={styles.rightContent}>
        <ProductMenu info={info} />
      </div>
    </div>
  );
}

export default ProductInfo;