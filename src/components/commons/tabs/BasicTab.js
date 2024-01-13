import styles from './BasicTab.module.css';
import { useState, useEffect } from 'react';

function BasicTab({tabs, actionOnIdex, initIndex}) {
  const initIdx = initIndex ? initIndex : 0;
  const [index, setIndex] = useState(initIdx);

  useEffect(()=>{
    if(actionOnIdex) {
      actionOnIdex(index);
    }
  },[index])

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