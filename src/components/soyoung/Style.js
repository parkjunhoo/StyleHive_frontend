import { getImageApi } from "../../utils/StringUtil";
import styles from "./Style.module.css";

function Style({data}) {
  return (
    <div className={styles.style}>
      <div 
        className={styles.style_image}
        style={{
          backgroundImage: `url(${getImageApi(data.imgList[0].imgThumbUrl)})`
        }}
        >
        <div
          style={{
            backgroundImage: `url(${getImageApi(data.userImg)})`
          }}
        className={styles.style_profile}></div>
        <a className={styles.style_nickname}>@{data.userId}</a>
      </div>
    </div>
  );
}

export default Style;
