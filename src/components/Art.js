import React from "react";
import PropTypes from "prop-types";

function Art(props) {
  return ( 
    <React.Fragment>
      <h3>{props.title}</h3>
      <p>{props.artist}</p>
      <p>{props.type}</p>
      <p>{props.description}</p>
      <p>{props.location}</p>
      <img src={props.img} alt="art" />
    </React.Fragment>
  );
}

Art.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  img: PropTypes.string
}

export default Art;
