import styles from './ProductListGrid.module.css';

function ProductListGrid({children}) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default ProductListGrid;