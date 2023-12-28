import styles from "./Cloth.module.css";
import "./Cloth.css";
type Props = {
  product: {
    image: string;
    maker: string;
    detail: string;
    price: number;
    special: string;
  };
  children?: React.ReactNode;
};
function setNumberComma(num: number): string {
  return num.toLocaleString("ko-KR");
}

function Cloth({ product, children }: Props) {
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>{children}</div>
      <div className={styles.product__info}>
        <a className={styles.product__maker}>{product.maker}</a>
        <a className={styles.product__detail}>{product.detail}</a>
        <a className={styles.product__price}>
          {setNumberComma(product.price)}원
        </a>
        <a className={styles.product__special}>{product.special}</a>
      </div>
    </div>
  );
}

export default Cloth;
