import Style from "./Style";
import styles from "./Styles.module.css";
function Styles({data}) {
  return (
    <div className={styles.styles}>
      {data.map((i,idx)=>{
        return(
          <Style
           key={idx}
           data={i}
          ></Style>
        )
      })}
    </div>
  );
}

export default Styles;
