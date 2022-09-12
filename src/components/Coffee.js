import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <div className="coffeeContainer col">
          <div className="col">
            <h3 className="text-dark fs-2 text-center">{props.name} - {props.origin}</h3>
            <p className="coffeeFont text-center"><em>{props.roast}</em></p>
            <p className="coffeeFont text-center"><em>${props.price}</em></p>
            <p className="coffeeFont text-center"><em>Beans: {props.poundsOfBeans}/lbs</em></p>
          </div>
        </div>
        <hr className="coffee"/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string,
  roast: PropTypes.string.isRequired,
  poundsOfBeans: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;