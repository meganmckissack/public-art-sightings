import React from "react";
import PropTypes from "prop-types";

function Art(props) {
  return ( 
    <React.Fragment>
      <div onClick = {() => props.whenArtClicked(props.id)}>
      <img src={props.img} width="10%" height="10%" alt={`{props.title} + {props.type}`} />
        <h3>{props.title}</h3>
        <p>{props.artist}</p>
        <p>{props.type}</p>
        <p>{props.description}</p>
        <p>{props.location}</p>  
      </div>
      <button onClick={() => props.whenArtIncreaseClick(props.id)}>Sightings +</button>
      <hr />
    </React.Fragment>
  );
}

Art.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func,
  whenArtIncreaseClick: PropTypes.func
}

export default Art;
