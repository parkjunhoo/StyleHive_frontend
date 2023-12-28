import Rank100Item from "./Rank100Item";
import styles from "./Rank100.module.css";
type Product = {
  image: string;
  maker: string;
  detail: string;
  price: number;
  special: string;
};
const product = {
  image: "",
  maker: "Supreme",
  detail: "Supreme x The North Face Suede Nuptse Jacket Black - 23FW",
  price: 2650000,
  special: "즉시 구매가",
};
const products: Product[] = [];
for (let i = 0; i < 20; i++) {
  products.push(product);
}
function Rank100() {
  return (
    <div className={styles.rank100}>
      {products.map((product, index) => {
        return (
          <Rank100Item key={product.image} product={product}>
            <div className="product__ranking">
              <a>{index + 1}</a>
            </div>
          </Rank100Item>
        );
      })}
    </div>
  );
}

export default Rank100;
