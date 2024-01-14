import styles from "./ShopCategory.module.css"
type Props={
    title:String;
}
function ShopCategory(props:Props)
{
return(
    <div className={styles.shop__cate}>
        <div className={styles.shop__img}></div>
        <div className={styles.shop__title}>{props.title}</div>

    </div>
)
}

export default ShopCategory;