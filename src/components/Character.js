import React from "react";

const Character = (props) => {
  return (
    <div onClick={() => props.handleClick()}>
      <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
    </div>
  );
};

export default Character;
