import Cloth from "./Cloth";
import styles from "./Cloths.module.css";

//임의값 원래는 db에서 받아와야함(app.tsx에서 받을거임)
const product = {
  image: "",
  maker: "Supreme",
  detail: "Supreme x The North Face Suede Nuptse Jacket Black - 23FW",
  price: 2650000,
  special: "즉시 구매가",
};
function Cloths() {
  return (
    <div className={styles.cloths}>
      <Cloth product={product} />
      <Cloth product={product} />
      <Cloth product={product} />
      <Cloth product={product} />
      <Cloth product={product} />
    </div>
  );
}

export default Cloths;
