import React from "react";
import PropTypes from 'prop-types';

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickSellBag } = props;
  
  return (
    <React.Fragment>
      <div className="coffeeContainer">
        <h1 className="text-center">Coffee Detail</h1>
        <h3 className="text-center">{coffee.name} - Origin: {coffee.origin}</h3>
        <p className="coffeeFont text-center"><em>Roast: {coffee.roast}</em></p>
        <p className="coffeeFont text-center"><em>${coffee.price}/lb</em></p>
        <p className="coffeeFont text-center"><em>Beans: {coffee.poundsOfBeans}/lbs</em></p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mx-2" onClick={ props.onClickingEdit }>Update Coffee</button>
          <button className="btn btn-primary mx-2" onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
          <button className="btn btn-primary mx-2" onClick={()=> onClickSellBag()}>Sell 1lb</button>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickSellBag: PropTypes.func
};

export default CoffeeDetail;