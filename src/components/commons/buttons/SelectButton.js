import styles from './SelectButton.module.css';

function SelectButton({text}) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <p className={styles.btn}>▼</p>
    </div>
  );
}

export default SelectButton;