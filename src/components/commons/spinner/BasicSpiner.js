import styles from "./BasicSpiner.module.css";

function BasicSpiner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default BasicSpiner;