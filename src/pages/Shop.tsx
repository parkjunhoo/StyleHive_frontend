import ShopFillter from "../components/soyoung/shop/ShopFillter";
import "./shared.css";
import ShopCategorys from "../components/soyoung/shop/ShopCategorys";

const titles = ["행운의 지갑", "b", "c", "d", "e", "f", "g", "아아"];

function Shop() {
  return (
    <div className="box">
      <ShopCategorys titles={titles} />
      <ShopFillter />
    </div>
  );
}

export default Shop;
