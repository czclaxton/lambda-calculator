import React from "react";

const Display = props => {
  return (
    <div className="output">
      <div className="output-text">{props.numbersState}</div>
    </div>
  );
};

export default Display;
