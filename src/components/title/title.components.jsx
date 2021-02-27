import React from "react";

import "./title.style.css";

export const Title = (props) => {
  return <h1 className="title"> {props.children} </h1>;
};
