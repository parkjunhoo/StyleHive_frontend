import styles from "./MenuItem.module.css";
type Props={
  name:string
}
function MenuItem(props:Props) {
  return (
    <div className={styles.main_item}>
      <div className={styles.main_item__box}></div>
      <a>{props.name}</a>
    </div>
  );
}
export default MenuItem;
