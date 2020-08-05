import React from "react";

const Character = (props) => {
  return (
    <div onClick={() => props.handleClick(props.id)}>
      <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
    </div>
  );
};

export default Character;
