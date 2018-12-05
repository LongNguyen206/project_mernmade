import React from "react";

export const CheckBox = props => {
  return (
    <li>
      <label>
        <input
          key={props.id}
          onClick={props.handlePlatform}
          type="checkbox"
          checked={props.isChecked}
          value={props.value}
        />{" "}
        <span>{props.value}</span>
      </label>
    </li>
  );
};

export default CheckBox;
