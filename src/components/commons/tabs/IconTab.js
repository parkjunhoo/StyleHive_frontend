import styles from './IconTab.module.css';

function IconTab({tabs, style}) {
  return (
    <div style={style} className={styles.container}>
      {tabs.map((item, idx)=>
        <div key={idx} className={styles.tabItem}>
          {item.iconSrc ? 
            <div>
              <div
              style={{
              backgroundImage:`url(${item.iconSrc})`
              }}
              onClick={item.action ? item.action : null}
              className={styles.iconDiv}></div>
              <p className={styles.titleText}>{item.title}</p>
            </div>
          : 
           <div 
            style={{
              backgroundColor: "#"+(parseInt(Math.random()*0xffffff).toString(16))+"56",
            }}
            onClick={item.action ? item.action : null}
            className={styles.iconDiv}>
            <p className={styles.onlyText}>#{item.title}</p>
          </div>}
          
         </div>
      )}
    </div>
  );
}

export default IconTab;