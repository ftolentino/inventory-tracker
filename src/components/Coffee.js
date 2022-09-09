import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <p><em>{props.roast}</em></p>
        <p><em>${props.price}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;