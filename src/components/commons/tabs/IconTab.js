import styles from './IconTab.module.css';

function IconTab({tabs, style}) {
  return (
    <div style={style} className={styles.container}>
      {tabs.map((item, idx)=>
        <div key={idx} className={styles.tabItem}>
          <div
           style={{
            backgroundImage:`url(${item.iconSrc})`
           }}
           className={styles.iconDiv}></div>
          <p className={styles.titleText}>{item.title}</p>
         </div>
      )}
    </div>
  );
}

export default IconTab;