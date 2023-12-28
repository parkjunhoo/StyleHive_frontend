import styles from "./Button.module.css";

type Props = {
  text: string;
};
function Button(props: Props) {
  return (
    <>
      <button className={styles.btn}>{props.text}</button>
    </>
  );
}

export default Button;
