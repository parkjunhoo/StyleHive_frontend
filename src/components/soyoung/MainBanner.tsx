import styles from "./MainBanner.module.css";

function MainBanner() {
  return (
    <div className={styles.main_banner}>
      <span className={styles.left_arrow}></span>
      <span className={styles.right_arrow}></span>
    </div>
  );
}

export default MainBanner;
