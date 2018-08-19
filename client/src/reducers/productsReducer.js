// All react components refresh when reducer updates the state
import { FETCH_PRODUCTS } from '../actions/types';

// Default state is empty which specifies we do not know the products by default
export default function(state = [], action) {
  switch (action.type) {
    // Return the products payload if FETCH_PRODUCTS is the action type
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}