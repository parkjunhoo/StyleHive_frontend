import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.main_footer}>
        <div className={styles.footer__itemBox}>
          <div className={styles.footer__items}>
            <a className={styles.item__title}>이용안내</a>
            <Link className={styles.item} to="/">
              검수기준
            </Link>
            <Link className={styles.item} to="/">
              이용정책
            </Link>
            <Link className={styles.item} to="/">
              패널티 정책
            </Link>
            <Link className={styles.item} to="/">
              가이드라인
            </Link>
          </div>
          <div className={styles.footer__items}>
            <a className={styles.item__title}>고객지원</a>
            <Link className={styles.item} to="/">
              검수기준
            </Link>
            <Link className={styles.item} to="/">
              이용정책
            </Link>
            <Link className={styles.item} to="/">
              패널티 정책
            </Link>
            <Link className={styles.item} to="/">
              가이드라인
            </Link>
          </div>
          <div className={styles.footer__items}>
            <a className={styles.item__title}>고객지원</a>
            <Link className={styles.item} to="/">
              검수기준
            </Link>
            <Link className={styles.item} to="/">
              이용정책
            </Link>
            <Link className={styles.item} to="/">
              패널티 정책
            </Link>
            <Link className={styles.item} to="/">
              가이드라인
            </Link>
          </div>
        </div>
        <div className={styles.footer__info}>
          <a>
            <b>고객센터 1588-7813</b>
          </a>
          <a>운영시간 평일 10:00 - 18:00 (토∙일, 공휴일 휴무)</a>
          <a> 점심시간 평일 13:00 - 14:00</a>
          <button type="button">문의하기</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
