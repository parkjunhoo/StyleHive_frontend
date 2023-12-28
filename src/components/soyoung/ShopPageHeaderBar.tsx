import HeaderItem from "./HeaderItem";
import styles from "./MainPageHeader.module.css";

function ShopPageHeaderBar() {
  return (
    <div className={styles.header_items}>
      <HeaderItem to="/shop/all" itemName="전체" />
      <HeaderItem to="/shop/luxury" itemName="럭셔리" />
      <HeaderItem to="/shop/outer" itemName="아우터" />
      <HeaderItem to="/shop/shoes" itemName="신발" />
    </div>
  );
}

export default ShopPageHeaderBar;
