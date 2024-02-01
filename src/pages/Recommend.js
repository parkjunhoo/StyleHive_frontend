import "./Recommend.css";
import "./shared.css";
import Cloths from "../components/soyoung/Cloths";
import SubTitle from "../components/soyoung/SubTitle";
import MainBanner from "../components/soyoung/MainBanner";
import MenuItems from "../components/soyoung/MenuItems";
import Banner from "../components/soyoung/Banner";
import Button from "../components/soyoung/Button";
import Styles from "../components/soyoung/Styles";
import axios from "axios";
import { useEffect, useState } from "react";
import MenuItem from "../components/soyoung/MenuItem";
import { getImageApi } from "../utils/StringUtil";

function Recommend() {

  const getStyleTagId = 10;
  
  const [justDropData, setJustDroprData] = useState([]);
  const getJustDropData = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/sort-date/5/1`);
    setJustDroprData(res.data.productList);
  }

  const [topBrandData, setTopBrandData] = useState([]);
  const getTopBrandData = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/top10-brand`);
    setTopBrandData(res.data);
  }

  const [topProductData, setTopProductData] = useState([]);
  const getTopProductData = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/top8-product`);
    setTopProductData(res.data);
  }

  const [styleData, setStyleData] = useState([]);
  const getStyleData = async () => {
    const res = await axios.get(`http://localhost:8080/api/community/tag/6/1?tagId=${getStyleTagId}`);
    setStyleData(res.data.commList);
  }

  useEffect(() => {
    getJustDropData();
    getTopBrandData();
    getTopProductData();
    getStyleData();
  }, []);

  return (
    <>
      <MainBanner />
      <div className="box">
        
        {/* <div className="main-items">
          <MenuItems
            name1="크림 드로우"
            name2="실시간 차트"
            name3="남성 추천"
            name4="여성 추천"
            name5="추가 10%쿠폰"
          />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
        </div> */}

        <div className="product__release">
          <SubTitle eng="Just Dropped" kor="발매상품" />
          <Cloths productData={justDropData}/>
          <Button text="더보기" />
        </div>
        <div className="product__TOPBrand">
         <SubTitle eng="TOP Brand" kor="인기 탑 브랜드" />
         <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(5, 1fr)",
          placeItems:"center",
         }}>
         {topBrandData.map((i,idx)=> {
          return(
            <MenuItem
             key={idx}
             name={i.productBrandEngName}>
              <div style={{width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img
                style={{
                  borderRadius:"50%",
                  width:"75px", height:"75px", padding:"5px", boxSizing:"border-box", objectFit:"contain"}}
                src={getImageApi(i.productBrandImg)} alt="brand"></img>
              </div>
          </MenuItem>
          )
         })}
         </div>
       </div>
      </div>
      <Banner />
      <div className="box">
        <div className="product__MostPopular">
          <SubTitle eng="Most Popular" kor="인기 상품" />
          <Cloths productData={topProductData}/>
          <Button text="더보기" />
        </div>
        <div className="style__required">
          <SubTitle eng="테스트 태그" kor="#태그" />
          <Styles data={styleData}/>
        </div>
      </div>
    </>
  );
}
export default Recommend;
