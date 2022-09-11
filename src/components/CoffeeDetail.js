import React from "react";
import PropTypes from 'prop-types';

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickSellBag } = props;
  
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - Origin: {coffee.origin}</h3>
      <p><em>Roast: {coffee.roast}</em></p>
      <p><em>${coffee.price}/lb</em></p>
      <p><em>Beans: {coffee.poundsOfBeans}/lbs</em></p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
      <button onClick={()=> onClickSellBag()}>Sell 1lb</button>
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