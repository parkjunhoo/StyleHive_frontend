import styles from './ProductDetailSection.module.css';

function ProductDetailSection({children,title}) {
  return (
    <div className={styles.container}>
      <p className={styles.titleText}>{title}</p>
      {children}
    </div>
  );
}

export default ProductDetailSection;