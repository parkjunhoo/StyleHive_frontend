import {Children} from 'react';
import styles from './DisplayTable.module.css';

function DisplayTable({children, title, more}) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>{title}</p>
        {more !== undefined ? <p onClick={more} className={styles.moreText}>더보기</p> : null}
      </div>
      {children}
    </div>
  );
}

function TextTableItem({children}) {
  return(
    <div className={styles.contentContainer}>
      {Children.map(children, (item, idx)=>{
        return (
          <div className={idx%2 === 0 ? styles.summ : styles.desc}>
            {item}
          </div>
        );
      })}
    </div>
  )
}

function IconTableItem({iconSrc, iconSize, title, subTitle, desc, more}) {
  return (
    <div className={styles.icontentContainer}>
      <div
       style={{
        backgroundImage : `url(${iconSrc})`,
        width: iconSize !== undefined ? iconSize : null,
        height: iconSize !== undefined ? iconSize : null,
      }} 
       className={styles.iconDiv}></div>
      <div className={styles.iTextContainer}>
        <div className={styles.iTitleText}>{title}
          <span className={styles.iSubTitleText}>{subTitle}</span>
          {more !== undefined ? 
          <span onClick={more} className={styles.iMore}>[?]</span>
          : null}
        </div>
        <p className={styles.iDescText}>{desc}</p>
      </div>
    </div>
  );
}

export { DisplayTable , TextTableItem , IconTableItem};