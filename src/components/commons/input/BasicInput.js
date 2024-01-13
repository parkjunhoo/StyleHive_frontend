import styles from './BasicInput.module.css';

function BasicInput({placeholder}) {
  return (
    <input
    placeholder={placeholder}
    className={styles.container}>
    </input>
  )
}

export default BasicInput;