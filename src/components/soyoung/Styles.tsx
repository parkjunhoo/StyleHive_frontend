import Style from "./Style";
import styles from "./Styles.module.css";
function Styles() {
  type User = {
    nickname: string;
  };
  const user: User = { nickname: "soyoung" };
  return (
    <div className={styles.styles}>
      <Style nickname={user.nickname} />
      <Style nickname={user.nickname} />
      <Style nickname={user.nickname} />
      <Style nickname={user.nickname} />
      <Style nickname={user.nickname} />
      <Style nickname={user.nickname} />
    </div>
  );
}

export default Styles;
