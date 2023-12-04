import styles from './BrandButton.module.css';

function BrandButton({iconSrc, name, subName}) {
  return (
    <div className={styles.container}>
      <div style={{backgroundImage: `url(${iconSrc})`}} 
      className={styles.icon}></div>
      <div className={styles.nameContainer}>
        <p className={styles.nameText}>{name}</p>
        <p className={styles.subNameText}>{subName}</p>
      </div>
      <p style={{color:"grey", marginLeft:"auto"}}>▶</p>
    </div>
  );
}

export default BrandButton;