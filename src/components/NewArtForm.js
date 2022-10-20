import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ResuableForm from "./ReusableForm";


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
      <ResuableForm
        formSubmissionHandler={handleNewArtFormSubmission}
        buttonText="Submit Art" 
      />
    </React.Fragment>
  )
}

NewArtForm.propTypes = {
  onNewArtCreation: PropTypes.func
}

export default NewArtForm;