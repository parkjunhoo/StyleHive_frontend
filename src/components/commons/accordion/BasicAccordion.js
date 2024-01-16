import { useCallback, useState, useRef } from 'react';
import styles from './BasicAccordion.module.css';

function BasicAccordion({summ, content}) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const onOpenBtnClick = useCallback((e)=>{
    e.stopPropagation();
    if(parentRef.current === null || childRef.current === null) return;
    parentRef.current.style.height = parentRef.current.clientHeight > 0 ?
    "0" : `${childRef.current.clientHeight}px`;
    setIsOpen(p=>!p);
  },[isOpen])
  return (
    <div className={styles.container}>
      <div onClick={onOpenBtnClick} className={styles.summDiv}>
        {summ}
      </div>
      <div ref={parentRef} className={styles.contentDiv}>
        <div ref={childRef} className={styles.content}>{content}</div>
      </div>
    </div>
  )
}

export default BasicAccordion;