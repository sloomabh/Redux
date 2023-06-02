// Reducer : is a function that accept state and action as a parameter and returns a  new state.

import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCreams: 20,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
export default IceCreamReducer;
