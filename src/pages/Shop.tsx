import ShopFillter from "../components/soyoung/shop/ShopFillter";
import "./shared.css";
import ShopCategorys from "../components/soyoung/shop/ShopCategorys";
import ProductItem from "../components/sanghee/ProductItem";

const titles = ["행운의 지갑", "b", "c", "d", "e", "f", "g", "아아"];

function Shop() {
  return (
    <div className="box">
      <ShopCategorys titles={titles} />
      <ShopFillter />
      <ProductItem
        ranking={1}
        image="a"
        brand="0"
        englishName="test"
        koreanName="test"
        price={10000}
        buyNowPrice={10000}
        bookmarkCount={100}
        reviewCount={100}
      />
    </div>
  );
}

export default Shop;
