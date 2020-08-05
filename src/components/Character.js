import React from "react";

const Character = (props) => {
  return (
    <span className="character" onClick={() => props.handleClick(props.id)}>
      <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
    </span>
  );
};

export default Character;
