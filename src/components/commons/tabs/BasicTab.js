import styles from './BasicTab.module.css';
import { useState } from 'react';

function BasicTab({tabs}) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      {tabs.map((item,i)=>{
        return(
          <div key={i}
           className={styles.tabItem}
           style={{
            fontWeight: (i===index) ? "900" : null,
            backgroundColor: (i===index) ? "#fff" : null
           }}
           onClick={()=>setIndex(i)}
          >{item}</div>
        );
      })}
      
    </div>
  );
}

export default BasicTab;