import React from "react";
import { Input } from "react-materialize";

export const CheckBox = props => {
  return (
    <li>
      <label>
        <input
          key={props.id}
          onClick={props.handleFilter}
          type='checkbox'
          checked={props.isChecked}
          value={props.value}
        />{" "}
        <span>{props.value}</span>
      </label>
    </li>
  );
};

export default CheckBox;
