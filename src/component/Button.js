import React from "react";
import "./extension.css"

const cls = "bg-indigo-700 text-white py-3 px-5 rounded";

const Button = ({ onClick }) => (
  <button id = "ab1" className={cls} onClick={onClick}>
    Dropdown button
  </button>
);

export default Button;