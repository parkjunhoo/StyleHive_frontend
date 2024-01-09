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
import {scrollToTop} from '../../utils/Util';

function ProductDetail() {
  const { productId } = useParams();

  const [productData, setProductData] = useState(null);
  const [styleData, setStyleData] = useState(null);
  const [styleCount, setStyleCount] = useState(0);
  const [anotherBrand, setAnotherBrand] = useState(null);
  

  const getProductData = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/${productId}`);
    setProductData(res.data);
    getAnotherBrand(res.data.productBrandId);
  }
  
  const getStyleData = async () => {
    const res = await axios.get(`http://localhost:8080/api/community/pid/${productId}/8`);
    if(res.data.count > 0) setStyleData(res.data.commList);
    else setStyleData(null);
    setStyleCount(res.data.count);
  }

  const getAnotherBrand = async (brandId) => {
    const res = await axios.get(`http://localhost:8080/api/product/another-brand/${brandId}/5/${productId}`);
    setAnotherBrand(res.data);
  }

  useEffect(()=>{
    getProductData();
    getStyleData();
    scrollToTop();
  },[])

  useEffect(()=>{
    getProductData();
    getStyleData();
    scrollToTop();
  },[productId]);

  return (
    <div className={styles.contentContainer}>
      {productData ? <ProductInfo info={productData}/> : null}
      {productData ? <SizeInfo/> : null}
      {styleData ? 
      <ProductDetailSection title={`스타일 ${styleCount}`}>
        <StyleSection data={styleData}/>
      </ProductDetailSection> : null}
      
      <hr style={{background: "#ebebeb", height: "1px", border:"0", margin: "25px 0"}}></hr>
      {/* <ProductDetailSection title={"브랜드배송 추천 상품"} more={true}>
        <ProductListGrid>
          <ProductCard badges={<FastDelBadge />}/>
          <ProductCard badges={[<ProductBadge content={"적립"}/>,<ProductBadge content={"무료배송"}/>]}/>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductListGrid>
      </ProductDetailSection> */}
      {productData ? <ProductDetailSection title={`${productData.brand.productBrandEngName}의 다른 상품`} more={true}>
        <ProductListGrid>
          {anotherBrand !== null ? 
            anotherBrand.map(({productId, imgUrl, productEngName, productBrandEngName, nowBuyPrice }, idx)=>{
              return (
                <ProductCard
                  productId={productId}
                  key={idx}
                  img={imgUrl}
                  brand={productBrandEngName}
                  name={productEngName}
                  price={nowBuyPrice}
                />
              )
            })
          :null}
        </ProductListGrid>
      </ProductDetailSection> : null}
      
    </div>
  );
}

export default ProductDetail;