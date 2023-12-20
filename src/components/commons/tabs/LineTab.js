import { useEffect, useState, useRef } from 'react';
import styles from './LineTab.module.css';

function LineTab({ tabs , style}) {
  const [index, setIndex] = useState(0);
  const thisNode = useRef(null);

  const onClickTab = (e, idx) => {
    thisNode.current.scrollLeft = e.target.offsetLeft - (thisNode.current.offsetWidth/2.5);
    setIndex(idx);
  };

  return(
    <ul 
     style={style}
     ref={thisNode}
     className={styles.container}>
      {tabs.map((item, idx)=>
        <li 
         key={idx} 
         onClick={item.action !== undefined ? (e)=>{onClickTab(e, idx); item.action();} : onClickTab}
         style={{
          borderBottom: idx == index ? "2px solid #222" : null,
          borderColor: idx == index ? item.color : null,
        }}
         className={styles.tabItem}>
          <p 
           style={{
            fontWeight: idx == index ? 600 : null,
            color: item.color !== undefined ? item.color : null,
           }}
           className={styles.itemTitleText}>
            {item.title}
          </p>
        </li>
      )}
    </ul>
  );
}

export default LineTab;