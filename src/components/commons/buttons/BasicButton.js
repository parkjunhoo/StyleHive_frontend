import styles from './BasicButton.module.css';

function BasicButton({children ,style}) {
  return(
    <div
    style={style}
    className={styles.container}>
      {children}
    </div>
  );
}

export default BasicButton;