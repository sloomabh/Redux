import { BUY_CAKE } from './cakeTypes';

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

//the action type is a constant now
//we export our action creator
//here we defined our ACTIOn whicg is an Object
//and we defined our action creator which is a function that return an object
