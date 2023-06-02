import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  const handleBuyCake = () => {
    dispatch(buyCake());
  };

  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '30px', fontWeight: 'bold' }}>
        With DISPATCH and SELECTOR HOOKS
      </h1>
      <h2>Num of cakes -{numOfCakes}</h2>
      <button onClick={handleBuyCake}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
