import styles from "./ShopFillter.module.css";
import "./ShopFillter.css";
import "./CheckBox";
import { useState } from "react";
import CheckBox from "./CheckBox";

function ShopFillter() {
  const [openClose, setOC] = useState(false);
  const [openClose2, setOC2] = useState(false);
  const [openClose3, setOC3] = useState(false);
  const [openClose4, setOC4] = useState(false);
  const [openClose5, setOC5] = useState(false);
  function clickEvent() {
    setOC(!openClose);
  }
  function clickEvent2() {
    setOC2(!openClose2);
  }
  function clickEvent3() {
    setOC3(!openClose3);
  }
  function clickEvent4() {
    setOC4(!openClose4);
  }
  function clickEvent5() {
    setOC5(!openClose5);
  }
  return (
    <div className={styles.fillter}>
      <a className={styles.title}>필터</a>
      <div className={styles.category__names}>
        <div
          onClick={clickEvent}
          className={
            openClose
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>카테고리</a>
          {openClose ? <a>-</a> : <a>+</a>}
        </div>
        {openClose ? (
          <div className={openClose ? `${styles.open} border` : styles.open}>
            <CheckBox category="아우터" />
            <CheckBox category="신발" />
            <CheckBox category="상의" />
            <CheckBox category="하의" />
          </div>
        ) : null}

        <div
          onClick={clickEvent2}
          className={
            openClose2
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>성별</a>
          {openClose2 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose2 ? (
          <div className={openClose2 ? `${styles.open} border` : styles.open}>
            <CheckBox category="아우터" />
            <CheckBox category="신발" />
            <CheckBox category="상의" />
            <CheckBox category="하의" />
          </div>
        ) : null}

        <div
          onClick={clickEvent3}
          className={
            openClose3
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>브랜드</a>
          {openClose3 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose3 ? (
          <div className={openClose3 ? `${styles.open} border` : styles.open}>
            <CheckBox category="아우터" />
            <CheckBox category="신발" />
            <CheckBox category="상의" />
            <CheckBox category="하의" />
          </div>
        ) : null}

        <div
          onClick={clickEvent4}
          className={
            openClose4
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>컬렉션</a>
          {openClose4 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose4 ? (
          <div className={openClose4 ? `${styles.open} border` : styles.open}>
            <CheckBox category="아우터" />
            <CheckBox category="신발" />
            <CheckBox category="상의" />
            <CheckBox category="하의" />
          </div>
        ) : null}

        <div
          onClick={clickEvent5}
          className={
            openClose5
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>사이즈</a>
          {openClose5 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose5 ? (
          <div className={openClose5 ? `${styles.open} border` : styles.open}>
            <CheckBox category="아우터" />
            <CheckBox category="신발" />
            <CheckBox category="상의" />
            <CheckBox category="하의" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ShopFillter;
