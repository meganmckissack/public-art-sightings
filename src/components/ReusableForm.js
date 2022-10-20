import React from "react";
import PropTypes from "prop-types";

function ResuableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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

ResuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ResuableForm;