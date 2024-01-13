import styles from './BasicPopup.module.css';

function BasicPopup({children, backgroundColor, onClose}) {
  return (
    <div 
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "rgba(34,34,34,.5)"
      }}
      className={styles.container}>
      <div 
        onClick={onClose ? onClose : null}
        className={styles.background}></div>
      {children}
    </div>
  )
}

export default BasicPopup;