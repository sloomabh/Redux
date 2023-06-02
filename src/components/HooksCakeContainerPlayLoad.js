import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HooksCakeContainerPlayLoad = () => {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const handleBuyCake = () => {
    dispatch(buyCake(number));
  };

  return (
    <div style={{ paddingBottom: '50px' }}>
      <h1
        style={{
          color: 'blue',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        With PAYLOAD
      </h1>
      <h2>Number of cakes {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleBuyCake}>Buy {number} cakes</button>
    </div>
  );
};

export default HooksCakeContainerPlayLoad;
