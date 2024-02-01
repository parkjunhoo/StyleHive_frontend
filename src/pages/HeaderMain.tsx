import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logoImg from "../styleHive3.png";

function Header() {
  return (
    <>
      <div className={styles.main_header}>
        <div className={styles.header__logo}>
          <img className={styles.header__logo__img} src={logoImg} alt="logo" />
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
            <NavLink to="/style/sneakers">STYLE</NavLink>
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
