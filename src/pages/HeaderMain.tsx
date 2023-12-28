import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
//이름다수정
function Header() {
  return (
    <>
      <div className={styles.main_header}>
        <div className={styles.header__logo}>
          <a>LOGO</a>
        </div>
        <div className={styles.header__nav}>
          <div
            className={[
              styles.header__nav__item,
              styles.header__nav__item_bold,
            ].join(" ")}
          >
            <NavLink to="/">HOME</NavLink>
          </div>
          <div className={styles.header__nav__item}>
            <NavLink to="/style">STYLE</NavLink>
          </div>
          <div className={styles.header__nav__item}>
            <NavLink to="/shop">SHOP</NavLink>
          </div>
          <div className={styles.header__nav__item}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
