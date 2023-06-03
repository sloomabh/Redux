import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import IceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  user: userReducer,
});
export default rootReducer;
