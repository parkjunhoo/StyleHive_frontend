import styles from './BasicPopup.module.css';

function BasicPopup({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default BasicPopup;