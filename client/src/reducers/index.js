import { combineReducers } from 'redux';
// Rename the import with "as"
import { reducer as reduxForm } from 'redux-form';
import productsReducer from './productsReducer';

// This is the model for the Redux global state
export default combineReducers({
  form: reduxForm,
  products: productsReducer
});