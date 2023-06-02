import { BUY_ICECREAM } from './iceCreamTypes';

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

//the action type is a constant now
//we export our action creator
//here we defined our ACTiOn whichis an Object
//and we defined our action creator which is a function that return an object
