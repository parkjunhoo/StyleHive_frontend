import "./CheckBox.css";
import { useState } from "react";

type Props = {
  category: string;
};

function CheckBox(props: Props) {
  const [check, setCheck] = useState(false);
  function clickEvent() {
    setCheck(!check);
  }
  return (
    <div className="checkbox">
      <button
        type="button"
        onClick={clickEvent}
        className={check ? "cate__button select" : "cate__button"}
      ></button>
      <a className="cate__title">{props.category}</a>
    </div>
  );
}

export default CheckBox;
