import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

const HooksIceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  const handleBuyIceCream = () => {
    dispatch(buyIceCream());
  };

  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '50px', fontWeight: 'bold' }}>
        combineReducers
      </h1>
      <h1 style={{ color: 'blue', fontSize: '30px', fontWeight: 'bold' }}>
        With DISPATCH and SELECTOR HOOKS
      </h1>
      <h2>Num of cakes {numOfIceCreams}</h2>
      <button onClick={handleBuyIceCream}>Buy cake</button>
    </div>
  );
};

export default HooksIceCreamContainer;
