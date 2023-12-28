import styles from "./Style.module.css";

type Props = {
  nickname: string;
};

function Style({ nickname }: Props) {
  return (
    <div className={styles.style}>
      <div className={styles.style_image}>
        <div className={styles.style_profile}></div>
        <a className={styles.style_nickname}>@{nickname}</a>
      </div>
    </div>
  );
}

export default Style;
