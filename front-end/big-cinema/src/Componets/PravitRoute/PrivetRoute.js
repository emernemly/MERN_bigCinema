import React from "react";

const PrivetRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return <div>{token && children}</div>;
};

export default PrivetRoute;
