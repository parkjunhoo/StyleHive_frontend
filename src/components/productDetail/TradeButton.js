import styles from './TradeButton.module.css';

function TradeButton({tag, price, desc, color}) {
  return (
    <div className={styles.container} style={{backgroundColor: color}}>
      <div>
        <p className={styles.tagText}>
          {tag}
        </p>
      </div>
      <div className={styles.verticalLine}></div>
      <div>
        <p className={styles.priceText}>
          {price}
        </p>
        <p className={styles.descText}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default TradeButton;