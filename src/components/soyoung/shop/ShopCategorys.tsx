import styles from "./ShopCategorys.module.css"
import ShopCategory from "./ShopCategory";

type Props={
    titles:string[]
}
function ShopCategorys(props:Props) {
    return (
        <div className={styles.shop__categorys}>
            {props.titles.map((title)=>{
                return(<ShopCategory title={title} />)
            })}
        </div>
    )
}

export default ShopCategorys;