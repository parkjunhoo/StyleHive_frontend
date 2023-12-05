import styles from './ProductDetailSection.module.css';

function ProductDetailSection({children,title, more, style}) {
  return (
    <div
     style={{style}}
     className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>
          {title} 
        </p>
        {more !== undefined ? <span className={styles.moreText}>더보기 ▷</span> : null}
      </div>
      {children}
    </div>
  );
}

export default ProductDetailSection;