import { JsxElement } from "typescript";
import styles from "./MenuItem.module.css";
import { ReactNode } from "react";
type Props={
  name:string,
  children?: ReactNode
}
function MenuItem(props:Props) {
  return (
    <div
    className={styles.main_item}>
      <div className={styles.main_item__box}>
        {props.children}
      </div>
      <a>{props.name}</a>
    </div>
  );
}
export default MenuItem;
