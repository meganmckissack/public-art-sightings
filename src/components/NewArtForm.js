import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewArtForm(props) {

  function handleNewArtFormSubmission(event) {
    event.preventDefault();
    props.onNewArtCreation({
      title: event.target.title.value,
      artist: event.target.artist.value,
      type: event.target.type.value,
      description: event.target.description.value,
      location: event.target.location.value,
      img: event.target.img.value,
      id: v4()
    })

  }


  return (
    <React.Fragment>
      <form onSubmit={handleNewArtFormSubmission}>
        <input
            type='text'
            name='title'
            placeholder='Title' />
        <input
            type='text'
            name='artist'
            placeholder='Artist' />
        <input
            type='text'
            name='type'
            placeholder='Type' />
        <textarea
            name='description'
            placeholder='Describe Artwork' />
        <input
            type='text'
            name='location'
            placeholder='Location' />
        <input
            type='text'
            name='img'
            placeholder='Image link' />
        <button type='submit'>Submit Art</button>
      </form>
    </React.Fragment>
  )
}

NewArtForm.propTypes = {
  onNewArtCreation: PropTypes.func
}

export default NewArtForm;