import React from "react";
import Classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={Classes.input}>
      <label>{props.label}</label>
      {/* in below sntax {...props.input} it take all the value of input here */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
