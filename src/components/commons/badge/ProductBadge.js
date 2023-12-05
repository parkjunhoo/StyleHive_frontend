import styles from './ProductBadge.module.css';
import thunderIcon from '../../../assets/images/thunder.png';

function ProductBadge({icon, content, style}) {
  return (
    <div
    style={ style }
    className={styles.container}>
      {icon !== undefined ? <div style={{backgroundImage:`url(${icon})`}} className={styles.iconContainer}></div> : null}
      <p className={styles.contentText}>{content}</p>
    </div>
  );
}

function FastDelBadge() {
  return (
    <ProductBadge 
    icon={thunderIcon} 
    content={"빠른배송"} 
    style={{
      color: "rgb(49, 180, 110)",
      backgroundColor: "rgb(242, 249, 246)",
    }}/>
  );
}

export { ProductBadge , FastDelBadge };