import styles from './BasicButton.module.css';

function BasicButton({children ,style, className, onClick}) {
  return(
    <div
    onClick={onClick}
    style={style}
    className={styles.container +" "+ className}>
      {children}
    </div>
  );
}

export default BasicButton;