import { useState } from "react";

export const Item = () => {
  const [check, setCheck] = useState(false);
  const [itemText, setItemText] = useState("");

  return (
    <div className="item">
      <div className={`item__check ${check && "isChecked"}`}></div>
      <div className="item__item-text">{itemText}</div>
    </div>
  );
};
