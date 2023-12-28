import ProductInfo from '../../components/productdetail/ProductInfo';
import styles from './ProductDetail.module.css';
import SizeInfo from '../../components/productdetail/SizeInfo';
import ProductDetailSection from '../../components/productdetail/ProductDetailSection';
import StyleSection from '../../components/productdetail/StyleSection';
import ProductCard from '../../components/commons/card/ProductCard';
import ProductListGrid from '../../components/productdetail/ProductListGrid';
import { FastDelBadge, ProductBadge } from '../../components/commons/badge/ProductBadge';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  const [productData, setProductData] = useState(null);

  const getProductData = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/${productId}`);
    setProductData(res.data);
  }

  useEffect(()=>{
    getProductData();
  },[])

  return (
    <div className={styles.contentContainer}>
      {productData ? <ProductInfo info={productData}/> : null}
      <SizeInfo/>
      <ProductDetailSection title={"스타일 432"}>
      <StyleSection isObserver={false}/>
      </ProductDetailSection>
      <hr style={{background: "#ebebeb", height: "1px", border:"0", margin: "25px 0"}}></hr>
      <ProductDetailSection title={"브랜드배송 추천 상품"} more={true}>
        <ProductListGrid>
          <ProductCard badges={<FastDelBadge />}/>
          <ProductCard badges={[<ProductBadge content={"적립"}/>,<ProductBadge content={"무료배송"}/>]}/>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductListGrid>
      </ProductDetailSection>
      <ProductDetailSection title={"Jordan의 다른 상품"} more={true}>
        <ProductListGrid>
          <ProductCard badges={<FastDelBadge />}/>
          <ProductCard />
          <ProductCard />
          <ProductCard badges={[<ProductBadge content={"적립"}/>,<ProductBadge content={"무료배송"}/>]}/>
          <ProductCard />
        </ProductListGrid>
      </ProductDetailSection>
    </div>
  );
}

export default ProductDetail;