import styles from './BlockSelectPopup.module.css';
import BasicPopup from '../commons/popup/BasicPopup';

function BlockSelectPopup({ title, options, closeAction }) {
  return (
    <BasicPopup>
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <p className={styles.titleText}>{title}</p>
          <p onClick={()=>{closeAction()}} className={styles.exitBtn}>X</p>
        </div>
        <div className={styles.blockLayout}>
          {options.map((i, idx)=>{
            return(
              <div
               onClick={i.action !== undefined ? i.action : null}
               style={ i.blockStyle === undefined ? null : i.blockStyle }
               key={idx} className={styles.block}>
                <div>
                  <p className={styles.blockTitleText}>{i.title}</p>
                  <p
                   style={ i.valueStyle === undefined ? null : i.valueStyle }
                   className={styles.blockValueText}>{i.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </BasicPopup>
  )
}

export default BlockSelectPopup;