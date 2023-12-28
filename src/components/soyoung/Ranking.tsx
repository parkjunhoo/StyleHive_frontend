import styles from "./Ranking.module.css";
import Cloth from "./Cloth";

const product = {
  image: "",
  maker: "Supreme",
  detail: "Supreme x The North Face Suede Nuptse Jacket Black - 23FW",
  price: 2650000,
  special: "즉시 구매가",
};
export default function Ranking() {
  return (
    <div className={styles.cloths}>
      <Cloth product={product}>
        <div className="product__ranking">
          <a>1</a>
        </div>
      </Cloth>
      <Cloth product={product}>
        <div className="product__ranking">
          <a>2</a>
        </div>
      </Cloth>
      <Cloth product={product}>
        <div className="product__ranking">
          <a>3</a>
        </div>
      </Cloth>
      <Cloth product={product}>
        <div className="product__ranking">
          <a>4</a>
        </div>
      </Cloth>
      <Cloth product={product}>
        <div className="product__ranking">
          <a>5</a>
        </div>
      </Cloth>
    </div>
  );
}
