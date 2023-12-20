import styles from './BasicButton.module.css';

function BasicButton({children ,style, className}) {
  return(
    <div
    style={style}
    className={styles.container +" "+ className}>
      {children}
    </div>
  );
}

export default BasicButton;