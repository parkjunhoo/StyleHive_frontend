import styles from './SelectButton.module.css';

function SelectButton({ text, onClick }) {
  return (
    <div
     onClick={onClick ? onClick : null}
     className={styles.container}>
      <p>{text}</p>
      <p className={styles.btn}>▼</p>
    </div>
  );
}

export default SelectButton;