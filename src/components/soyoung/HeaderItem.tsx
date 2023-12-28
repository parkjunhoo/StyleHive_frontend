import style from "./HeaderItem.module.css";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  itemName: string;
};

function HeaderItem(props: Props) {
  return (
    <div className={style.header_item}>
      <NavLink to={props.to}>{props.itemName}</NavLink>
    </div>
  );
}

export default HeaderItem;
