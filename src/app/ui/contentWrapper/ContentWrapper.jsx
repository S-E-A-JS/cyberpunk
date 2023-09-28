/** @format */

import block from "bem-cn";

import "./ContentWrapper.scss";

const b = block("contentWrapper");

const ContentWrapper = ({ children }) => {
  return <div className={b()}>{children}</div>;
};

export default ContentWrapper;
