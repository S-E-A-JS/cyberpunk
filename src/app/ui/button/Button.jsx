/** @format */

import block from "bem-cn";
import "./Button.scss";

const b = block("customButton");

const CustomButton = ({ isBlack, isLarge, text, onClick }) => {
  return <div className={b({ isBlack, isLarge })}>{text}</div>;
};

export default CustomButton;
