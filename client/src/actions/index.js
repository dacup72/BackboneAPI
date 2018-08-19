import axios from 'axios';
import { FETCH_PRODUCTS } from './types';

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/api/products');
  // sends action.type "FETCH_PRODUCTS" to Reducers and updates everything in app with products
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};