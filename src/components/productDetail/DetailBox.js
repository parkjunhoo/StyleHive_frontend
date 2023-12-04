import styles from './DetailBox.module.css';

function DetailBox({details}) {

  return (
    <div className={styles.detailContainer}>
      {details.map((item, i)=> {
        return (
          <div
           style={{borderLeft: i===0 ? "" : `1px solid #ebebeb`}}
           className={styles.boxItem} key={i}>
            <p className={styles.titleText}>
              {item.title}
            </p>
            <p className={styles.valueText}>
              {item.value}
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default DetailBox;