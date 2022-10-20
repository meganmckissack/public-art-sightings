import React from "react";
import Proptypes from 'prop-types';

function ArtDetail(props) {
  const { art, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Art Detail</h1>
      <img src={art.img} width="10%" height="10%" alt={art.title}/>
      <h3>{art.location} - {art.title}</h3>
      <p>{art.type} - {art.description}</p>
      <button onClick={ onClickingEdit }>Update Art</button>
      <button onClick={() => onClickingDelete(art.id) }>Delete Art</button>
      <hr />
    </React.Fragment>
  )
}

ArtDetail.propTypes = {
  art: Proptypes.object,
  onClickingDelete: Proptypes.func,
  onClickingEdit: Proptypes.func
};

export default ArtDetail;