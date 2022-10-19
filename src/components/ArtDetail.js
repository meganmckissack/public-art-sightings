import React from "react";
import Proptypes from 'prop-types';

function ArtDetail(props) {
  const { art } = props;

  return (
    <React.Fragment>
      <h1>Art Detail</h1>
      <img src={art.img} alt={art.title}/>
      <h3>{art.location} - {art.title}</h3>
      <p>{art.type} - {art.description}</p>
    </React.Fragment>
  )
}

ArtDetail.propTypes = {
  art: Proptypes.object
}

export default ArtDetail;