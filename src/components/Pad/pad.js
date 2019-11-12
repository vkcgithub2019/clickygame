import React from "react";
import "./pad.css";

const Pads = props => (
  <div className="pad" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <div className="overlay">
      </div>
    </div>
  </div>
);

export default Pads;