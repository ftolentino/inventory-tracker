import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const reusableFormStyles = {
    width: '400px',
    border: '2px solid #dadada',
    borderRadius: '7px'
  }

  return (
    <React.Fragment>
      <div className="form-group d-flex flex-row justify-content-center my-4">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="col my-2">
            <div className="col my-2">
              <input style={reusableFormStyles}
                type='text'
                name='name'
                placeholder='Coffee Name' />
            </div>
            <div className="col my-2">
              <input style={reusableFormStyles}
                type='text'
                name='origin'
                placeholder='Origin' />
            </div>
            <div className="col my-2">
              <input style={reusableFormStyles}
                type='number'
                name='price'
                placeholder='Price' />  
            </div>
            <div className="col my-2">
              <input style={reusableFormStyles}
                type='text'
                name='roast'
                placeholder='Roast' />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="d-flex justify-content-center btn btn-danger" type='submit'>{props.buttonText}</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;