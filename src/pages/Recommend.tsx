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
import { useEffect } from "react";

const [data, setData] = useEffect(null);
async function fatchTest() {
  await axios.get("http://localhost:8080/pushtest").than((res) => {
    setData(res.data);
  });
}

function Recommend() {
  console.log(data)
  return (
    <>
      <MainBanner />
      <div className="container">
        <div className="main-items">
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
        </div>

        <div className="product__release">
          <SubTitle eng="Just Dropped" kor="발매상품" />
          <Cloths />
          <Cloths />
          <Button text="더보기" />
        </div>

        <div className="product__TOPBrand">
          <SubTitle eng="TOP Brand" kor="인기 탑 브랜드" />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
        </div>
      </div>
      <Banner />
      <div className="container">
        <div className="product__MostPopular">
          <SubTitle eng="Most Popular" kor="인기 상품" />
          <Cloths />
          <Button text="더보기" />
        </div>
        <div className="style__required">
          <SubTitle eng="설레는 연말 코디 필수템" kor="#윈터템챌린지" />
          <Styles />
        </div>
      </div>
    </>
  );
}
export default Recommend;
