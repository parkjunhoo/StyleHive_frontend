import HeaderItem from "./HeaderItem";
import styles from "./MainPageHeader.module.css";

function MainPageHeader() {
  return (
    <div className={styles.header_items}>
      <HeaderItem to="/" itemName="추천" />
      <HeaderItem to="/lank" itemName="랭킹" />
      <HeaderItem to="/luxury" itemName="럭셔리" />
      <HeaderItem to="/man" itemName="남성" />
      <HeaderItem to="/woman" itemName="여성" />
      <HeaderItem to="/discovery" itemName="발견" />
    </div>
  );
}

export default MainPageHeader;
