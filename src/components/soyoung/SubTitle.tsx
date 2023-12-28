import styles from "./SubTitle.module.css";
type Props={
  eng:string,
  kor?:string
}
function SubTitle(props:Props) {
  return (
    <div className={styles.title}>
      <div className={styles.eng}>{props.eng}</div>
      {typeof props.kor=='string'?<div className={styles.kor}>{props.kor}</div>:null}
    </div>
  );
}

export default SubTitle;
